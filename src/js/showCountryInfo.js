import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import fetchCountries from './fetchCountries';
import { aboutCountryMarkup, countryListMarkup } from './updateCountryMarkup';
import countryContainer from './refs';
const debounce = require('lodash.debounce');

const inputRef = document.querySelector('#country-name-input');
const debouncedQuery = debounce(showCountryInfo, 500);
inputRef.addEventListener('input', debouncedQuery);

function showCountryInfo(event) {
  const inputValue = event.target.value;
  countryContainer.innerHTML = '';
  fetchCountries(inputValue).then((data) => {
    if (data.length > 10) {
      error({
        text: "Too many matches found. Please enter a more specific query."
      });
    }
    else if (data.length > 1 && data.length < 10) {
      countryListMarkup(data);
    }
    else if (data.length === 1) {
      aboutCountryMarkup(data);
    }
  });
};
