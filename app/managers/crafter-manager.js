import {
  Manager,
  Crafter,
  ItemManager
} from '../_index.js';

export class CrafterManager extends Manager {

  #itemManager;
  #rawCrafterDataMap;

  constructor(itemManager) {
    super(Crafter);

    if (!(itemManager instanceof ItemManager)) {
      throw new Error('RecipeManager.constructor(): itemManager must be of type ItemManager.');
    }

    this.#itemManager = itemManager;
    this.#rawCrafterDataMap = new Map();
  }

  async load() {
    const response = await fetch('app/data/crafter-data.json');
    const rawCrafterDataArray = await response.json();
    this.#rawCrafterDataMap = new Map(rawCrafterDataArray.map(rawData => [rawData.tag, rawData]));
    await super.load(rawCrafterDataArray, (rawData) => new Crafter(rawData));
  }
  resolve() {

  }

  get crafters() {
    return this.getAll();
  }

}