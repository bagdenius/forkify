import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && !data.length))
      return this.renderError();
    this._data = data;
    this._clear();
    this._parentElement.insertAdjacentHTML(
      `afterbegin`,
      this._generateMarkup()
    );
  }

  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll(`*`));
    const currentElements = Array.from(
      this._parentElement.querySelectorAll(`*`)
    );
    newElements.forEach((newElement, i) => {
      const currentElement = currentElements[i];
      // Update changed text
      if (
        !newElement.isEqualNode(currentElement) &&
        newElement.firstChild?.nodeValue.trim() !== ``
      )
        currentElement.textContent = newElement.textContent;
      // Update changed attributes
      if (!newElement.isEqualNode(currentElement)) {
        Array.from(newElement.attributes).forEach(attribute =>
          currentElement.setAttribute(attribute.name, attribute.value)
        );
      }
    });
  }

  _clear() {
    this._parentElement.innerHTML = ``;
  }

  renderSpinner() {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML(`afterbegin`, markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
          <div>
              <svg>
                  <use href="${icons}#icon-alert-triangle"></use>
              </svg>
          </div>
              <p>${message}</p>
      </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML(`afterbegin`, markup);
  }

  renderMessage(message = this._message) {
    const markup = `
      <div class="message">
          <div>
              <svg>
                  <use href="${icons}#icon-smile"></use>
              </svg>
          </div>
              <p>${message}</p>
      </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML(`afterbegin`, markup);
  }
}
