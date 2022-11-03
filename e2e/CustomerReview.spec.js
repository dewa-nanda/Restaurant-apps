Feature('Costumer Review');

Before(({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.card-item .card-item__content .card-item__title');

  I.click(locate('.card-item .card-item__content .card-item__title').first());
});

Scenario('Comment with fill all field', async ({ I }) => {
  const Comment = locate('listreviewcomment-element h2');
  const TotalComment = await I.grabTextFrom(Comment);

  I.seeElement('#nameElement');
  I.fillField('#nameElement', 'KELARRR');

  I.seeElement('#commantElement');
  I.fillField('#commantElement', 'ahahahahahahahaha');

  I.click('Comment');

  I.waitForElement('listreviewcomment-element');

  I.dontSee(TotalComment, Comment);
});

Scenario('Comment with not inputing name', async ({ I }) => {
  I.seeElement('#commantElement');
  I.fillField('#commantElement', 'ahahahahahahahaha');

  I.click('Comment');
  I.seeElement('.swal2-container');
});

Scenario('Comment with not inputing comment textbox', async ({ I }) => {
  I.seeElement('#nameElement');
  I.fillField('#nameElement', 'KELARRR');

  I.click('Comment');
  I.seeElement('.swal2-container');
});

Scenario('Comment with not inputing all section', async ({ I }) => {
  I.click('Comment');
  I.seeElement('.swal2-container');
});
