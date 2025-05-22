import { Entity } from '../_index.js';

export class Item extends Entity {

}

import { Item } from '../_index.js';

export class RecipeCrafter {

  constructor({ crafter, craftingTime }) {
    if (!(crafter instanceof Item)) {
      throw new Error(`RecipeCrafter.constructor(): "crafter" must be of type Item.`);
    }
    if (typeof craftingTime !== 'number') {
      throw new Error(`RecipeCrafter.constructor(): "craftingTime" must be a number.`);
    }

    this.crafter = crafter;
    this.craftingTime = craftingTime;
  }

  toString() {
    return `${this.crafter.name} (${this.crafter.tag}): ${this.craftingTime}`;
  }

}