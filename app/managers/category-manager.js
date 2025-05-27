import {
  Manager,
  Category
} from '../_index.js';

export class CategoryManager extends Manager {

  constructor() {
    super(Category);
  }

  async load() {
    const response = await fetch('app/data/item-data.json');
    const itemData = await response.json();
    await super.load(itemData);
  }

}