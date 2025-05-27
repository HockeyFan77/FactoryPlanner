import {
  Entity,
  Item,
  Crafter
} from '../_index.js';

export class Recipe extends Entity {

  #craftingTime; // Number
  #inputs = []; // RecipeItem
  #outputs = []; // RecipeItem
  #crafters = []; // Crafter

  constructor(rawData, items) {
    super(rawData);

    //this.inputs = []; // RecipeItem
    //this.outputs = []; // RecipeItem
    //this.crafters = []; // Crafter
  }

  get craftingTime() {
    return this.#craftingTime;
  }
  get inputs() {
    return this.#inputs;
  }
  get outputs() {
    return this.#outputs;
  }
  get crafters() {
    return this.#crafters;
  }

}