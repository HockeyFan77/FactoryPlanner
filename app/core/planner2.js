/*
    Entity: {
      tag: string                     // converted to lower case
      name: string
      // optional
      size: string                    // "width*height*length"
      power: number                   // +0.0 for producers, -0.0 for consumers in kW
      power: {                        // alternate for power producer/consumer
        production: number            // +0.0
        consumption: number           // -0.0
      }
      efficiency: number              // efficiency for power producers as a percentage (e.g., 0.80 = 80%)
      craftingTimeMultiplier: number  // for crafters, applied to base crafting time for recipe (e.g., 1.5)
      craftingTimeMultiplier: {       // alternate for craftingTimeMultiplier, calculates crafting time
        numerator: number             // multiplier as numerator / denominator
        denominator: number
      }
    }
*/

export default class Planner2 {

  #itemManager;
  #recipeManager;

  constructor() {
    this.#itemManager = new ItemManager();
    this.#recipeManager = new RecipeManager(this.#itemManager);
  }

  async initializeEntities() {
    await Promise.all([
      this.#itemManager.load(),
      this.#recipeManager.load(),
    ]);
  }
  resolveEntities() {
    return this.#recipeManager.resolve();
  }

  get items() {
    return this.#itemManager.items;
  }
  get recipes() {
    return this.#recipeManager.recipes;
  }

}