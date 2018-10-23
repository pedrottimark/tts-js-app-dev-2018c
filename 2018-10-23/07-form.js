const stateInitial = {
  code: '',
  culinaryCategory: 'fruits',
  local: false,
  organic: false,
  quantity: '',
};

const state = {...stateInitial};

const resetPurchase = () => {
  state.code = stateInitial.code;
  state.quantity = stateInitial.quantity;
};

const resetState = () => {
  resetPurchase();
  state.culinaryCategory = stateInitial.culinaryCategory;
  state.local = stateInitial.local;
  state.organic = stateInitial.organic;
};

const appendOptions = select => {
  const {culinaryCategory} = state;

  const option0 = document.createElement('option');
  option0.setAttribute('value', '');
  option0.appendChild(document.createTextNode(`select from ${culinaryCategory}`));
  select.appendChild(option0);

  products.filter(
    product => product.culinaryCategory === culinaryCategory
  ).forEach(product => {
    const option = document.createElement('option');
    option.setAttribute('value', product.id);
    option.appendChild(document.createTextNode(product.description));
    select.appendChild(option);
  })
};

const onChangeCategory = event => {
  try {
    state.culinaryCategory = event.target.value;
    const select = form.elements.code;
    select.innerHTML = '';
    appendOptions(select);
  } catch (error) {
    console.error(error.message);
  }
};

const form = document.querySelector('form[name="produce"]');

// TODO 1 find and assign the tbody element
const tbody = null;

const updatePurchase = () => {
  try {
    form.elements.code.value = state.code;
    form.elements.quantity.value = state.quantity;
  } catch (error) {
    console.error(error.message);
  }
};

const updateFormFromState = () => {
  updatePurchase();
  try {
    const elements = form.elements;
    appendOptions(elements.code);
    elements.culinaryCategory.value = state.culinaryCategory;
    elements.local.checked = state.local;
    elements.organic.checked = state.organic;
  } catch (error) {
    console.error(error.message);
  }
};

const updateStateFromForm = () => {
  try {
    const elements = form.elements;
    state.code = elements.code.value;
    state.culinaryCategory = elements.culinaryCategory.value;
    state.local = elements.local.checked;
    state.organic = elements.organic.checked;
    state.quantity = elements.quantity.value;
  } catch (error) {
    console.error(error.message);
  }
};

// TODO 2
// Given state from form, create tr element with 5 td children
const addRow = state => {
  //const tdQuantity = createElement('td', {className: 'quantity'}, TODO);
  //const tdDescription = createElement('td', {className: 'description'}, TODO);
  //const tdCode = createElement('td', {className: 'code'}, TODO);
  //const tdLocal = createElement('td', {className: 'local'}, TODO);
  //const tdOrganic = createElement('td', {className: 'organic'}, TODO);
  //const tr = createElement('tr', null, TODO);
  //tbody.appendChild(tr);
}

const onSubmit = (event) => {
  event.preventDefault();
  updateStateFromForm();
  console.log('onSubmit', JSON.stringify(state));
  addRow(state);
  resetPurchase();
  updatePurchase();
};

const onReset = (event) => {
  event.preventDefault();
  resetState();
  updateFormFromState();
  // TODO 3 delete all child rows from tbody element
};

try {
  updateFormFromState();
  Array.prototype.forEach.call(form.querySelectorAll('input[name="culinaryCategory"]'), input => {
    input.addEventListener('change', onChangeCategory);
  });
  form.addEventListener('submit', onSubmit);
  form.addEventListener('reset', onReset);
} catch (error) {
  console.error(error.message);
}
