import {
  Manager,
  Recipe,
  RecipeItem,
  RecipeCrafter,
  ItemManager
} from '../_index.js';

export class RecipeManager extends Manager {

  #itemManager;
  #rawRecipeDataMap;

  constructor(itemManager) {
    super(Recipe);

    if (!(itemManager instanceof ItemManager)) {
      throw new Error('RecipeManager.constructor(): itemManager must be of type ItemManager.');
    }

    this.#itemManager = itemManager;
    this.#rawRecipeDataMap = new Map();
  }

  async load() {
    const response = await fetch('app/data/recipe-data.json');
    const rawRecipeDataArray = await response.json();
    this.#rawRecipeDataMap = new Map(rawRecipeDataArray.map(rawData => [rawData.tag, rawData]));
    await super.load(rawRecipeDataArray, (rawData) => new Recipe(rawData));
  }
  resolve() {
    let unresolvedCount = 0;

    for (const recipe of this.getAll()) {

      const rawData = this.#rawRecipeDataMap.get(recipe.tag);
      if (!rawData) {
        console.warn(`RecipeManager.resolve(): No raw data found for recipe tag "${recipe.tag}".`);
        continue;
      }

      const inputs = (rawData.inputs ?? []).map(ref => {
        const item = this.#itemManager.get(ref.tag);
        if (!item) {
          unresolvedCount++;
          console.warn(`Recipe.resolve(): Could not resolve input item tag "${ref.tag}".`);
          return null;
        }
        return new RecipeItem({ item, qty: ref.qty });
      }).filter(Boolean);

      const outputs = (rawData.outputs ?? []).map(ref => {
        const item = this.#itemManager.get(ref.tag);
        if (!item) {
          unresolvedCount++;
          console.warn(`Recipe.resolve(): Could not resolve output item tag "${ref.tag}".`);
          return null;
        }
        return new RecipeItem({ item, qty: ref.qty });
      }).filter(Boolean);

     const crafters = (rawData.crafters ?? []).map(ref => {
        const crafter = this.#itemManager.get(ref.tag);
        if (!crafter) {
          unresolvedCount++;
          console.warn(`Recipe.resolve(): Could not resolve crafter item tag "${ref.tag}".`);
          return null;
        }
        return new RecipeCrafter({ crafter, craftingTime: ref.craftingTime });
      }).filter(Boolean);

      recipe.resolve(inputs, outputs, crafters);
    }

    this.#rawRecipeDataMap = null;

    return unresolvedCount;
  }

  get recipes() {
    return this.getAll();
  }

}