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

export const fetchGetWorks = authorid =>
  fetch(`/works?authorid=${authorid}`, {
    headers: {
      Accept: 'application/json',
    },
  })
    .then(convertToJSON)
    .then(works =>
      works.sort((workA, workB) =>
        workA.onsaledate === workB.onsaledate
          ? 0
          : workA.onsaledate > workB.onsaledate // more recent dates first
          ? -1
          : 1
      )
    );

export const fetchGetReactions = authorid =>
  fetch(`/reactions?authorid=${authorid}`, {
    headers: {
      Accept: 'application/json',
    },
  }).then(convertToJSON);

export const fetchPutReaction = reactionObject =>
  fetch(`/reactions/${reactionObject.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reactionObject),
  }).then(convertToJSON);
