const convertToJSON = response => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

export const fetchGetProduct = productId =>
  fetch(`/products/${productId}`, {
    headers: {
      Accept: 'application/json',
    },
  }).then(convertToJSON);

export const fetchGetPurchases = () =>
  fetch(`/purchases`, {
    headers: {
      Accept: 'application/json',
    },
  })
    .then(convertToJSON)
    .then(purchases =>
      purchases.sort((purchaseA, purchaseB) =>
        purchaseA.id < purchaseB.id ? 1 : -1,
      ),
    );

export const fetchPostPurchase = purchase =>
  fetch(`/purchases`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(purchase),
  }).then(convertToJSON);

export const fetchDeletePurchase = purchaseId =>
  fetch(`/purchases/${purchaseId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
    },
  }).then(convertToJSON);
