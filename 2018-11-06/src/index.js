import './index.css';
import checkURL from './check.svg';
import createElement from './createElement.js';

import {
  fetchDeleteItem,
  fetchGetDoer,
  fetchGetItems,
  fetchPostItem,
  fetchPutItem,
} from './fetch.js';

import {addItem, deleteItem, findItem, toggleCompleted} from './logic.js';

// application state
const doerId = 'lesson-11';
const tbody = createElement('tbody', null);
const trMap = new Map();
let items = [];
let text = '';

// Given boolean value of property in item object,
// return string value of className property in element.
const completednessName = completed =>
  completed ? 'completed' : 'uncompleted';

const onChangeCompleted = itemId => {
  const tr = trMap.get(itemId);
  items = toggleCompleted(items, itemId);
  const item = findItem(items, itemId);
  tr.className = completednessName(item.completed);
  fetchPutItem(item);
};

const onClickDelete = itemId => {
  const tr = trMap.get(itemId);
  tbody.removeChild(tr);
  trMap.delete(itemId);
  items = deleteItem(items, itemId);
  fetchDeleteItem(itemId);
};

const onInputText = event => {
  text = event.target.value.trim(); // delete leading and trailing spaces
  buttonAdd.disabled = text.length === 0;
};

const onAddItem = event => {
  event.preventDefault();
  inputText.disabled = true;
  buttonAdd.disabled = true;

  fetchPostItem({
    doerId,
    completed: false,
    text,
  })
    .then(item => {
      const [item0] = items;
      const tr0 = item0 ? trMap.get(item0.id) : null;

      items = addItem(items, item);
      const tr = renderItemRow(item);
      trMap.set(item.id, tr);
      tbody.insertBefore(tr, tr0);

      inputText.value = '';
      inputText.disabled = false;
      buttonAdd.disabled = false;
    })
    .catch(error => {
      console.error(error.message);

      inputText.disabled = false;
      buttonAdd.disabled = false;
    });
};

const renderCompletednessCell = item =>
  createElement(
    'td',
    {
      className: 'completedness',
    },
    createElement('input', {
      type: 'checkbox',
      checked: item.checked,
      onChange: onChangeCompleted.bind(null, item.id),
    })
  );

const renderTextCell = item =>
  createElement(
    'td',
    {
      className: 'text',
    },
    createElement('p', null, item.text)
  );

const renderDeleteCell = item =>
  createElement(
    'td',
    {
      className: 'delete',
    },
    createElement(
      'button',
      {
        onClick: onClickDelete.bind(null, item.id),
      },
      'Delete'
    )
  );

const renderItemRow = item =>
  createElement(
    'tr',
    {
      className: completednessName(item.completed),
    },
    renderCompletednessCell(item),
    renderTextCell(item),
    renderDeleteCell(item)
  );

const h1 = createElement(
  'h1',
  {
    className: 'waiting',
  },
  createElement(
    'img',
    {
      alt: 'check mark',
      src: checkURL,
    }
  ),
  createElement(
    'span',
    null,
    doerId
  )
);

const inputText = createElement('input', {
  type: 'text',
  placeholder: 'text of new item',
  onInput: onInputText,
});

const buttonAdd = createElement(
  'button',
  {
    type: 'submit',
    disabled: true,
  },
  'Add'
);

const form = createElement(
  'form',
  {
    onSubmit: onAddItem,
  },
  inputText,
  buttonAdd
);

const root = document.querySelector('#root');
root.appendChild(h1);

Promise.all([fetchGetDoer(doerId), fetchGetItems(doerId)])
  .then(([doer, fetchedItems]) => {
    h1.appendChild(createElement('span', null, doer.name));

    items = fetchedItems;
    items.forEach(item => {
      const tr = renderItemRow(item);
      trMap.set(item.id, tr);
      tbody.appendChild(tr);
    });

    root.appendChild(form);
    root.appendChild(createElement('table', null, tbody));
    h1.className = '';
  })
  .catch(error => {
    console.error(error.message);
  });
