import Planner from './core/planner.js';

const planner = new Planner();

async function main() {

  await planner.initializeEntities();
  const unresolvedEntityCount = planner.resolveEntities();
  if (unresolvedEntityCount > 0) {
    $('#banner').text(`Unable to resolve ${unresolvedEntityCount} entities. Check console.`);
  }

  const $itemList = $('#item-list');
  const $recipeList = $('#recipe-list');

  loadSelect($itemList, planner.items);
  loadSelect($recipeList, planner.recipes);

  $itemList.on('change', function () {
    const selectedItem = $itemList.find('option:selected').first().data();
    const matchingRecipes = planner.recipes.filter(recipe => {
      return recipe.outputs?.some(output => {
        return output.item?.tag === selectedItem?.tag;
      });
    });
    loadSelect($recipeList, matchingRecipes);
    //loadSelect($crafterList);
  });

  //$recipeList.on('change', function () {
  //  const selectedRecipe = $recipeList.find('option:selected').first().data();
  //  loadSelect($crafterList, selectedRecipe.crafters.map(c => c.crafter).filter(Boolean));
  //});

  function loadSelect($select, options, clearSelect = true, includeEmptyOption = true) {
    if (clearSelect) {
      $select.empty();
    }
    if (includeEmptyOption) {
      $('<option>').text('-- select --').appendTo($select);
    }
    for (const option of options ?? []) {
      $('<option>')
        .attr('value', option.tag)
        .text(`${option.name} (${option.tag})`)
        .data(option)
        .appendTo($select);
    }
  }

}

$(document).ready(main);
