import {
  Manager,
  Item
} from '../_index.js';

export class ItemManager extends Manager {

  constructor() {
    super(Item);
  }

  async load() {
    const response = await fetch('app/data/item-data.json');
    const itemData = await response.json();
    await super.load(itemData);
  }

  get items() {
    return this.getAll();
  }

}