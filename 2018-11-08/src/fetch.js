const convertToJSON = response => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

export const fetchGetAuthor = authorid =>
  fetch(`/authors/${authorid}`, {
    headers: {
      Accept: 'application/json',
    },
  }).then(convertToJSON);

export const fetchGetOpinions = authorid =>
  fetch(`/opinions?authorid=${authorid}`, {
    headers: {
      Accept: 'application/json',
    },
  }).then(convertToJSON);

export const fetchGetTitles = authorid =>
  fetch(`/titles?authorid=${authorid}`, {
    headers: {
      Accept: 'application/json',
    },
  }).then(convertToJSON);
