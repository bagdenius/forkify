import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';

// if (module.hot) module.hot.accept();

async function controlRecipe() {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);
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
    resultsView.render(model.getSearchResultsPage());
    paginationView.render(model.state.search);
  } catch (error) {
    console.error(`${error} 💀`);
    resultsView.renderError();
  }
}

function controlPagination(goToPage) {
  resultsView.render(model.getSearchResultsPage(goToPage));
  paginationView.render(model.state.search);
}

function controlServings(newServings) {
  model.updateServings(newServings);
  recipeView.update(model.state.recipe);
}

function controlAddBookmark() {
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.removeBookmark(model.state.recipe.id);
  recipeView.update(model.state.recipe);
  bookmarksView.render(model.state.bookmarks);
}

function init() {
  recipeView.addHandlerRender(controlRecipe);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
}
init();
