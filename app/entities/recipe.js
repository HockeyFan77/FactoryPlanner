import {
  Entity
} from '../_index.js';

export class Recipe extends Entity {

  constructor(rawData) {
    super(rawData);

    this.inputs = []; // RecipeItem
    this.outputs = []; // RecipeItem
    this.crafters = []; // RecipeCrafter
  }

  resolve(inputs, outputs, crafters) {
    this.inputs = inputs ?? [];
    this.outputs = outputs ?? [];
    this.crafters = crafters ?? [];
  }

}