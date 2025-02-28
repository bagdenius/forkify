import View from './view.js';

class SearchView extends View {
  _parentElement = document.querySelector(`.search`);
  _errorMessage = `Could not find the recipe.<br>Please try another one 😉`;
  _message = ``;

  getQuery() {
    const query = this._parentElement.querySelector(`.search__field`).value;
    this.#clearInput();
    return query;
  }

  #clearInput() {
    this._parentElement.querySelector(`.search__field`).value = ``;
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener(`submit`, e => {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
