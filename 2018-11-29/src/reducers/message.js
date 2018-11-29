const messageInitial = '';

export default (message = messageInitial, action) => {
  switch (action.type) {
    case 'ADD_PURCHASE_FAILURE':
    case 'DELETE_PURCHASE_FAILURE':
    case 'GET_PRODUCT_FAILURE':
    case 'GET_PURCHASES_FAILURE':
      return action.message;
    default:
      return message;
  }
};
