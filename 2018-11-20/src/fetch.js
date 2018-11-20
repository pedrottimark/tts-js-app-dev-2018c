const convertToJSON = response => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

export const fetchGetFoods = () =>
  fetch(`/api/v1/foods`, {
    headers: {
      Accept: 'application/json',
    },
  }).then(convertToJSON);

export const fetchGetMinerals = () =>
  fetch(`/api/v1/minerals`, {
    headers: {
      Accept: 'application/json',
    },
  }).then(convertToJSON);

export const fetchGetVitamins = () =>
  fetch(`/api/v1/vitamins`, {
    headers: {
      Accept: 'application/json',
    },
  }).then(convertToJSON);
