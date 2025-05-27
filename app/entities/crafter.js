import {
  Utils,
  Item
} from '../_index.js';

export class Crafter extends Item {

  #craftingTimeMultiplier; // Rational

  /*
      {
        "id": "adv-smelter",
        "name": "Advanced Smelter",
        "power": -100.0,
        "productionTimeMultiplier": { "p": 2, "q": 3 }
      }
  */
  constructor(rawData, category) {
    super(rawData, category);

    this.#craftingTimeMultiplier = Utils.toRational(rawData.craftingTimeMultiplier);

  }

  get productionTimeMultiplier() {
    return this.#craftingTimeMultiplier;
  }

}