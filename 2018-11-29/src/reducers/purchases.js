const purchasesInitial = [];

export default (purchases = purchasesInitial, action) => {
  switch (action.type) {
    case 'GET_PURCHASES_SUCCESS':
      return action.purchases;
    case 'ADD_PURCHASE_SUCCESS':
      return [action.purchase, ...purchases];
    case 'DELETE_PURCHASE_SUCCESS':
      return purchases.filter(purchase => purchase.id !== action.purchaseId);
    default:
      return purchases;
  }
};
