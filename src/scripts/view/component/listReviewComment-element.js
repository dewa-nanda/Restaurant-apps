/* eslint-disable no-underscore-dangle */
import { reviewComment } from '../templates/template-creator';

class listReviewCommentElement extends HTMLElement {
  set data(comment) {
    this._data = comment;
    this.tabIndex = 0;
    this.innerHTML = `<h2>${this._data.length} Comments</h2>`;
    const listReviewElement = reviewComment(this._data);
    this.innerHTML += `<div class="list-review">${listReviewElement}</div>`;
  }
}

customElements.define('listreviewcomment-element', listReviewCommentElement);
