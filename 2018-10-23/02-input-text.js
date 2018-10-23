const onInput = event => {
  // TODO declare name and value as variables with object destructuring:
  const target = event.target;
  console.info(`onInput name=${target.name} value=${target.value}`);
};

const input = document.querySelector('input[type="text"]');
input.addEventListener('input', onInput);
