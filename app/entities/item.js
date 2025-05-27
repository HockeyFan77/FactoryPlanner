import {
  Utils,
  Entity,
  Category
} from '../_index.js';

export class Item extends Entity {

  #category; // Category
  #size; // String
  #power; // Number

  constructor(rawData, category) {
    super(rawData);

    if (!(category instanceof Category)) {
      throw new Error(`Item.constructor(): Invalid or missing "category" in item: ${category}.`);
    }

    this.#category = category;
    this.#size = (rawData.size ?? '').trim();
    this.#power = Utils.toNumber(rawData.power, 0.0);
  }

  get category() {
    return this.#category;
  }
  get size() {
    return this.#size;
  }
  get power() {
    return this.#power;
  }

}