import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const gotoPage = +btn.dataset.goto;

      handler(gotoPage);
    });
  }

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const currentPage = this._data.page;

    // Page 1, and there are other pages
    if (currentPage === 1 && numPages > 1)
      return this.renderButton('next', currentPage);

    // Last page
    if (currentPage === numPages && numPages > 1)
      return this.renderButton('prev', currentPage);

    // Other page
    if (currentPage < numPages)
      return `${this.renderButton('next', currentPage)}${this.renderButton(
        'prev',
        currentPage
      )}`;

    // Page 1, no other pages
    return '';
  }
  // _generateMarkup() {
  //   const currentPage = this._data.page;
  //   const numPages = Math.ceil(
  //     this._data.results.length / this._data.resultsPerPage
  //   );
  //   // Page 1, and there are others pages
  //   if (currentPage === 1 && numPages > 1) {
  //     return this.renderButtonNext(currentPage);
  //   }
  //   // Last page
  //   if (currentPage === numPages && numPages > 1) {
  //     return this.renderButtonPrev(currentPage);
  //   }
  //   // Other page
  //   if (currentPage < numPages) {
  //     return `${this.renderButtonPrev(currentPage)}${this.renderButtonNext(
  //       currentPage
  //     )}`;
  //   }
  //   // Page 1, and there are NO others pages
  //   return '';
  // }
}

export default new PaginationView();
