import View from './view.js';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector(`.results`);
  _errorMessage = `No recipes found for your query.<br>Please try again!`;
  _message = ``;

  _generateMarkup() {
    return this._data.map(this.#generatePreviewMarkup).join(``);
  }

  #generatePreviewMarkup(result) {
    const id = window.location.hash.slice(1);
    return `             
    <li class="preview">
        <a class="preview__link ${
          id === result.id ? `preview__link--active` : ``
        }" href="#${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" alt="${result.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>
          </div>
        </a>
      </li>
`;
  }
}

export default new ResultsView();
