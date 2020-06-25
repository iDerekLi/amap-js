import Loader from '../loader';
import LoaderUtil from '../loader-util';

describe('Loader', () => {
  it('应该Loader参数合并', () => {
    const options = {
      string: 'str',
      number: 100,
      boolean: false,
      object: { a: 'a', b: 'b' },
      array: ['arr0', 'arr1'],
    };
    const loader = new Loader(options);

    expect(loader.options.string).toBe('str');
    expect(loader.options.number).toBe(100);
    expect(loader.options.boolean).toBe(false);
    expect(loader.options.object.a).toBe('a');
    expect(loader.options.object.b).toBe('b');
    expect(loader.options.array[0]).toBe('arr0');
    expect(loader.options.array[1]).toBe('arr1');

    expect(loader.options !== options).toBe(true);
    expect(loader.options.object !== options.object).toBe(true);
    expect(loader.options.array !== options.array).toBe(true);
  });

  it('应该继承Loader参数合并', () => {
    class ChildLoader extends Loader {
      getDefaultOpts() {
        return {
          string: 'str',
          number: 100,
          boolean: false,
          object: { a: 'a', b: 'b' },
          array: ['arr0', 'arr1'],
          Undefined: undefined,
          Null: null,
          NaN: NaN,
          Infinity: Infinity,
        };
      }
    }

    const options = {
      string: 'newStr',
      object: {
        a: 'A',
      },
      array: ['newArr0'],
      Undefined: undefined,
      Null: null,
      NaN: NaN,
      Infinity: Infinity,
    };
    const loader = new ChildLoader(options);

    expect(loader.options.string).toBe('newStr');
    expect(loader.options.number).toBe(100);
    expect(loader.options.boolean).toBe(false);
    expect(loader.options.object.a).toBe('A');
    expect(loader.options.object.b).toBe('b');
    expect(loader.options.array[0]).toBe('newArr0');
    expect(loader.options.array[1]).toBe('arr1');
    expect(loader.options.Undefined).toBe(undefined);
    expect(loader.options.Null).toBe(null);
    expect(isNaN(loader.options.NaN)).toBe(true);
    expect(loader.options.Infinity).toBe(Infinity);
    console.log(loader.options);

    expect(loader.options !== options).toBe(true);
    expect(loader.options.object !== options.object).toBe(true);
    expect(loader.options.array !== options.array).toBe(true);
  });

  it('应该调用load应该异步加载', async () => {
    const loader = new Loader();
    const result = await loader.load();
    expect(result).toBe(loader);
  });

  it('应该注册ReadyState', () => {
    expect(Loader.OPEN).toBe(undefined);

    LoaderUtil.registerReadyState(Loader, {
      OPEN: 1,
    });

    expect(Loader.OPEN).toBe(1);
    expect(Loader.prototype.OPEN).toBe(1);

    try {
      Loader.OPEN = 2;
    } catch (e) {}
    expect(Loader.OPEN).toBe(1);

    try {
      delete Loader.OPEN;
    } catch (e) {}
    expect(Loader.OPEN).toBe(1);

    class ChildLoader extends Loader {
      constructor(options) {
        super(options);
        this.readyState = this.CLOSE;
      }

      open() {
        this.readyState = this.OPEN;
      }

      close() {
        this.readyState = this.CLOSE;
      }
    }
    LoaderUtil.registerReadyState(ChildLoader, {
      CLOSE: 0,
    });
    const loader = new ChildLoader();

    expect(ChildLoader.OPEN).toBe(1);
    expect(ChildLoader.CLOSE).toBe(0);
    expect(loader.OPEN).toBe(1);
    expect(loader.CLOSE).toBe(0);
    expect(loader.readyState).toBe(0);
    loader.open();
    expect(loader.readyState).toBe(1);
    loader.close();
    expect(loader.readyState).toBe(0);
  });
});
