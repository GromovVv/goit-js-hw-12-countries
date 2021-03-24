import debounce from 'lodash.debounce';

import refs from './refs';
import fetchCountry from './fetchCountries';
import updateMarkup from './updateCountriesMarkup';

refs.input.addEventListener(
  'input',
  debounce(event => {
    event.preventDefault();
    const searchQuery = event.target.value;
    refs.container.innerHTML = '';
    if (searchQuery.trim() !== '') {
      fetchCountry(searchQuery)
      .then(response => response === undefined ? alert('По данному запросу ничего не найдено') : updateMarkup(response))
      .catch(err => console.log(err));
    }
  }, 500),
);