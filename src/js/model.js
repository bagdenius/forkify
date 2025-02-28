import { API_URL, RESULTS_PER_PAGE } from './config';
import { getJSON } from './helpers';

export const state = {
  recipe: {},
  search: {
    query: ``,
    results: [],
    page: 1,
    resultsPerPage: RESULTS_PER_PAGE,
  },
};

export async function loadRecipe(id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (error) {
    // console.error(`${error} 💀`);
    throw error;
  }
}

export async function loadSearchResults(query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);
    state.search.results = data.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      };
    });
  } catch (error) {
    // console.error(`${error} 💀`);
    throw error;
  }
}

export function getSearchResultsPage(page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;
  return state.search.results.slice(start, end);
}

export function updateServings(newServings) {
  state.recipe.ingredients.forEach(ingridient => {
    ingridient.quantity *= newServings / state.recipe.servings;
  });
  state.recipe.servings = newServings;
}
