const assert = require('assert');

Feature('Liking & Unlike Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking & unliking one restaurants', async ({ I }) => {
  I.see('Belum ada restourant favorit untuk saat ini', '.err-favorite h1');
  // Menyukai salah satu restoran.
  I.amOnPage('/');

  I.waitForElement('.card-item .card-item__content .card-item__title');

  const firstResto = locate('.card-item .card-item__content .card-item__title').first();
  const tittleFirstResto = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('item-restaurant');
  const likedRestoTittle = await I.grabTextFrom('.card-item__title a');

  assert.strictEqual(tittleFirstResto, likedRestoTittle);
  // END

  // Batal menyukai restoran tersebut.
  I.amOnPage('/');

  I.waitForElement('.card-item .card-item__content .card-item__title');
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.err-favorite')
  // END

});
