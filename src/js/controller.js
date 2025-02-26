import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

if (module.hot) module.hot.accept();

async function controlRecipe() {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    await model.loadRecipe(id);
    recipeView.render(model.state.recipe);
  } catch (error) {
    console.error(`${error} 💀`);
    recipeView.renderError();
  }
}

async function controlSearchResults() {
  try {
    const query = searchView.getQuery();
    if (!query) return;
    resultsView.renderSpinner();
    await model.loadSearchResults(query);
    resultsView.render(model.state.search.results);
  } catch (error) {
    console.error(`${error} 💀`);
    resultsView.renderError();
  }
}

function init() {
  recipeView.addHandlerRender(controlRecipe);
  searchView.addHandlerSearch(controlSearchResults);
}
init();
