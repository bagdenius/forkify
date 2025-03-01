import * as model from './model.js';
import { MODAL_CLOSE_TIME_SECONDS } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

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
    console.error(error);
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
    console.error(error);
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

function controlBookmarks() {
  bookmarksView.render(model.state.bookmarks);
}

async function controlAddRecipe(newRecipe) {
  try {
    addRecipeView.renderSpinner();
    await model.uploadRecipe(newRecipe);
    recipeView.render(model.state.recipe);
    addRecipeView.renderMessage();
    setTimeout(() => {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_TIME_SECONDS * 1000);
    bookmarksView.render(model.state.bookmarks);
    window.history.pushState(null, ``, `${model.state.recipe.id}`);
  } catch (error) {
    console.error(error);
    addRecipeView.renderError(error.message);
  }
}

function init() {
  model.loadBookmarksFromLocalStorage();
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipe);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
}
init();

// TODO: replace Parcel build and deploy with WebPack or Vercel
// TODO: replace fractional library (e.g. fracty)
// TODO: re-render adding recipe form after adding recipe or error displaying

// TODO: display number of pages between the pagination buttons
// TODO: add ability to sort search results by duration or number of ingridients
// TODO: perform ingridient validation in view, before submitting theform
// TODO: improve recipe ingridient input: separate in multiple field and allow more than 6 ingridients (better by adding more ingridients fields by pressing a button)

// TODO: shopping list feature: button on recipe to add ingridients to a list
// TODO: weakly meal planning feature: assing recipes to the next 7days and showon a weekly calendar
// TODO: get nutrition data on each ingridient from special API (e.g. spoonacular API: https://spoonacular.com/food-api) and calculate total calories of recipe (and per serving).
