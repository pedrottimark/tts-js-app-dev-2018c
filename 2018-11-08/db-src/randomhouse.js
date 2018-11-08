const fetch = require('isomorphic-fetch');

const convertToJSON = response => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

const yyyymmdd = mmddyyyy =>
  `${mmddyyyy.slice(6)}-${mmddyyyy.slice(0, 2)}-${mmddyyyy.slice(3, 5)}`;

const yyyymmddToday = new Date().toISOString().slice(0, 10);

const base = 'https://reststop.randomhouse.com/resources';

const AUTHORS_URL = /^\/authors\/\d+$/;
const TITLES_URL = /^\/titles\?authorid=\w+$/;

module.exports = (req, res, next) => {
  if (req.method === 'GET' && AUTHORS_URL.test(req.url)) {
    fetch(`${base}${req.url}`, {
      headers: {
        Accept: 'application/json',
      },
    })
      .then(convertToJSON)
      .then(data => {
        res.writeHead(200, {
          'Content-Type': 'application/json',
        });
        res.end(JSON.stringify(data));
      })
      .catch(error => {
        res.writeHead(400);
        res.end(error.message);
      });
  } else if (req.method === 'GET' && TITLES_URL.test(req.url)) {
    fetch(`${base}${req.url}&format=TR&max=100`, {
      headers: {
        Accept: 'application/json',
      },
    })
      .then(convertToJSON)
      .then(data =>
        Array.isArray(data.title)
          ? data.title
              .map(title => ({
                ...title,
                onsaledate: yyyymmdd(title.onsaledate),
              }))
              .filter(
                ({authors, onsaledate}) =>
                  authors &&
                  !Array.isArray(authors.authorId) &&
                  onsaledate <= yyyymmddToday
              )
              .sort((titleA, titleB) =>
                titleA.workid === titleB.workid
                  ? 0
                  : titleA.workid < titleB.workid
                  ? -1
                  : 1
              )
              .filter(
                (title, i, titles) =>
                  i === 0 || title.workid !== titles[i - 1].workid
              )
              .sort(
                (titleA, titleB) =>
                  titleA.onsaledate === titleB.onsaledate
                    ? 0
                    : titleA.onsaledate < titleB.onsaledate
                    ? 1
                    : -1 // most recent
              )
          : []
      )
      .then(data => {
        res.writeHead(200, {
          'Content-Type': 'application/json',
        });
        res.end(JSON.stringify(data));
      })
      .catch(error => {
        res.writeHead(400);
        res.end(error.message);
      });
  } else {
    next();
  }
};
