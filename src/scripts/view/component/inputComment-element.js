/* eslint-disable no-underscore-dangle */
class commentElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  get value() {
    const dataReviews = {
      name: `${this.querySelector('#nameElement').value}`,
      review: `${this.querySelector('#commantElement').value}`,
    };

    return dataReviews;
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = `
        <h2>Customer Reviews </h2>

        <div class="review-section">
            <div class="input-commant">
                <h3>Insert your comment below</h3>
                <input type="text" id="nameElement" class="input" placeholder="masukan nama anda"></input>
                <textarea id="commantElement" class="input" placeholder="masukan komentar anda"></textarea>
                <button id="reviewButtonElement" type="button" aria-label="give ur comment here">Comment</button>
            </div>
        </div>

    `;

    this.querySelector('#reviewButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('inputcomment-element', commentElement);
