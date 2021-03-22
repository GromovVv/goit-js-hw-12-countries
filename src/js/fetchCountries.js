import { errorFetch } from './notifications.js';

function fetchCountry(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  return fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject('fetch have not worked: error' + response.status);
  })
    .catch(() => errorFetch());
}
export default fetchCountry;