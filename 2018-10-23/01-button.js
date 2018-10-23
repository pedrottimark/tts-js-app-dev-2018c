const p = document.querySelector('p');

const onClick = event => {
  console.info(event.target);

  // TODO see that class attribute and className property are equivalent:
  p.setAttribute('class', event.target.value);
  //p.className = event.target.value;
};

const buttons = document.querySelectorAll('button');

Array.prototype.forEach.call(buttons, button => {
  button.addEventListener('click', onClick);
});
