import {
  Item
} from '../_index.js';

export class RecipeItem {

  #item; // Item
  #qty; // Number

  constructor(item, qty) {
    if (!(item instanceof Item)) {
      throw new Error(`RecipeItem.constructor(): "item" must be of type Item.`);
    }
    if (typeof qty !== 'number') {
      throw new Error(`RecipeItem.constructor(): "qty" must be a number.`);
    }

    this.#item = item;
    this.#qty = Number.toInteger(qty);
  }

  toString() {
    return `${this.item.name} (${this.item.id}): ${this.qty}`;
  }

  get item() {
    return this.#item;
  }
  get qty() {
    return this.#qty;
  }

}