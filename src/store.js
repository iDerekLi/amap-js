class Store {
  constructor() {
    this.length = 0;
    this.__state = {};
  }

  set(name, value) {
    if (!(name in this.__state)) {
      this.__state[name] = value;
      this.length++;
    } else {
      this.__state[name] = value;
    }
  }

  remove(name) {
    if (name in this.__state) {
      delete this.__state[name];
      this.length--;
    }
  }

  get(name) {
    return this.__state[name];
  }

  getAll() {
    return this.__state;
  }

  clear() {
    for (const name in this.__state) {
      this.remove(name);
    }
  }
}

const store = new Store();

export default store;
