export class Entity {

  constructor(rawData) {
    if (typeof rawData?.tag !== 'string' || rawData.tag.trim() === '') {
      throw new Error(`Entity.constructor(): Invalid or missing "tag" in entity: ${rawData?.tag}.`);
    }
    if (typeof rawData?.name !== 'string' || rawData.name.trim() === '') {
      throw new Error(`Entity.constructor(): Invalid or missing "name" in entity: ${rawData?.name}.`);
    }

    this.tag = rawData.tag;
    this.name = rawData.name;
  }

  toString() {
    return `${this.name} (${this.tag})`;
  }

}