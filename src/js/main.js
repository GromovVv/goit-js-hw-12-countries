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
    fetchCountry(searchQuery).then(updateMarkup);
  }, 500),
);