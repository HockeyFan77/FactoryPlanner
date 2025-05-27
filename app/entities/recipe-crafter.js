import {
  Crafter
} from '../_index.js';

export class RecipeCrafter {

  #crafter; // Crafter
  #craftingTime; // Number

  constructor(crafter, craftingTime) {
    if (!(crafter instanceof Crafter)) {
      throw new Error(`RecipeCrafter.constructor(): "crafter" must be of type Crafter.`);
    }
    if (typeof craftingTime !== 'number') {
      throw new Error(`RecipeCrafter.constructor(): "craftingTime" must be a number.`);
    }

    this.#crafter = crafter;
    this.#craftingTime = craftingTime;
  }

  toString() {
    return `${this.crafter.name} (${this.crafter.id}): ${this.craftingTime}`;
  }

  get crafter() {
    return this.#crafter;
  }
  get craftingTime() {
    return this.#craftingTime;
  }

}