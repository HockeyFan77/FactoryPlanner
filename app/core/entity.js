export class Entity {

  #id; // String
  #name; // String

  constructor(rawData) {
    if (typeof rawData?.id !== 'string' || rawData.id.trim() === '') {
      throw new Error(`Entity.constructor(): Invalid or missing "id" in entity: ${rawData?.id}.`);
    }
    if (typeof rawData?.name !== 'string' || rawData.name.trim() === '') {
      throw new Error(`Entity.constructor(): Invalid or missing "name" in entity: ${rawData?.name}.`);
    }

    this.#id = rawData.id;
    this.#name = rawData.name;
  }

  toString() {
    return `${this.name} (${this.id})`;
  }

  get id() {
    return this.#id;
  }
  get name() {
    return this.#name;
  }

}