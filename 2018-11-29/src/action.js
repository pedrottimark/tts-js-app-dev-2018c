import {fetchDeletePurchase, fetchGetPurchases} from './fetch';

export const deletePurchase = purchaseId => dispatch => {
  dispatch({
    type: 'DELETE_PURCHASE_WAITING',
    purchaseId,
  });
  fetchDeletePurchase(purchaseId).then(
    () => {
      dispatch({
        type: 'DELETE_PURCHASE_SUCCESS',
        purchaseId,
      });
    },
    error => {
      dispatch({
        type: 'DELETE_PURCHASE_FAILURE',
        message: error.message,
        purchaseId,
      });
    },
  );
};

export const getPurchases = () => dispatch => {
  dispatch({
    type: 'GET_PURCHASES_WAITING',
  });
  fetchGetPurchases().then(
    purchases => {
      dispatch({
        type: 'GET_PURCHASES_SUCCESS',
        purchases,
      });
    },
    error => {
      dispatch({
        type: 'GET_PURCHASES_FAILURE',
        message: error.message,
      });
    },
  );
};
