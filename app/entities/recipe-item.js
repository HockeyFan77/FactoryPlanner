import { Item } from '../_index.js';

export class RecipeItem {

  constructor({ item, qty }) {
    if (!(item instanceof Item)) {
      throw new Error(`RecipeItem.constructor(): "item" must be of type Item.`);
    }
    if (typeof qty !== 'number') {
      throw new Error(`RecipeItem.constructor(): "qty" must be a number.`);
    }

    this.item = item;
    this.qty = qty;
  }

  toString() {
    return `${this.item.name} (${this.item.tag}): ${this.qty}`;
  }

}