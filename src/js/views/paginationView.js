import View from './view.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector(`.pagination`);

  addHandlerClick(handler) {
    this._parentElement.addEventListener(`click`, e => {
      const button = e.target.closest(`.btn--inline`);
      if (!button) return;
      const goToPage = +button.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // Only 1 page
    if (numPages === 1) return ``;
    // First page
    if (currentPage === 1 && numPages > 1)
      return this.#generateMarkupButton(true);
    // Last page
    if (currentPage === numPages) return this.#generateMarkupButton(false);
    // Middle/Other page
    return this.#generateMarkupButton(false) + this.#generateMarkupButton(true);
  }

  #generateMarkupButton(isNext) {
    const currentPage = this._data.page;
    const goToPage = isNext ? currentPage + 1 : currentPage - 1;
    return `
        <button data-goto="${goToPage}" class="btn--inline pagination__btn--${
      isNext ? `next` : `prev`
    }">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-${
      isNext ? `right` : `left`
    }"></use>
            </svg>
            <span>Page ${goToPage}</span>
        </button>
        `;
  }
}

export default new PaginationView();
