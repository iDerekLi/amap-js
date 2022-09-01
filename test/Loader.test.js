import Loader from "../src/loaders/Loader";

console.log(Loader);

describe("Loader", () => {
  it("应该创建MyLoader", () => {
    class MyLoader extends Loader {}
    const loader = new MyLoader();

    expect(loader instanceof MyLoader).toBe(true);
    expect(loader instanceof Loader).toBe(true);
  });

  it("应该调用load加载", async () => {
    class MyLoader extends Loader {
      async load() {
        return 1;
      }
    }

    const loader = new MyLoader();
    await expect(loader.load()).resolves.toBe(1);
  });
});
