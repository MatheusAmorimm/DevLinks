const button = document.querySelector(`#button`);
const html = document.querySelector(`html`);
const picture = document.querySelector(`#picture`);

button.addEventListener(`click`, () => {
  html.classList.toggle(`light`);

  if (html.classList.contains(`light`)) {
    picture.setAttribute(`src`, `./assets/profile2.png`);
  } else {
    picture.setAttribute(`src`, `./assets/profile1.png`);
  }
});
