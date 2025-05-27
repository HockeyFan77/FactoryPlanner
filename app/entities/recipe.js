import {
  Entity,
  Item,
  Crafter
} from '../_index.js';

export class Recipe extends Entity {

  #inputs = []; // RecipeItem
  #outputs = []; // RecipeItem
  #crafters = []; // RecipeCrafter

  constructor(rawData, items) {
    super(rawData);

    //this.inputs = []; // RecipeItem
    //this.outputs = []; // RecipeItem
    //this.crafters = []; // RecipeCrafter
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