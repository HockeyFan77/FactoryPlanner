export class Manager {

  #map = new Map();
  #nameMap = new Map();
  #EntityClass;

  constructor(EntityClass) {
    if (!EntityClass) {
      throw new Error('Manager.constructor(): EntityClass must be supplied.');
    }

    this.#EntityClass = EntityClass;
  }

  async load(rawDataArray, entityBuilder) {
    if (!Array.isArray(rawDataArray)) {
      console.warn('Manager.load(): rawDataArray must be an array.');
      return;
    }

    if (typeof entityBuilder !== 'function') {
      entityBuilder = (rawData) => new this.#EntityClass(rawData);
    }

    for (const rawData of rawDataArray) {
      const entity = entityBuilder(rawData);
      if (!(entity instanceof this.#EntityClass)) {
        console.warn(`Manager.load(): entityBuilder returned instance of ${entity?.constructor.name} but expected ${this.#EntityClass}`);
        continue;
      }

      this.#map.set(entity.id, entity);
      this.#nameMap.set(entity.name.toLowerCase(), entity);
    }
  }

  get(id) {
    return (typeof id !== 'string') ? undefined : this.#map.get(id);
  }
  getByName(name) {
    return (typeof name !== 'string') ? undefined : this.#nameMap.get(name.trim().toLowerCase());
  }
  getAll() {
    return [...this.#map.values()];
  }
  getIds() {
    return [...this.#map.keys()];
  }
  getNames() {
    return [...this.#nameMap.keys()];
  }

}