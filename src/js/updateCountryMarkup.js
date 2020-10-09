import countryTpl from '../templates/country-info.hbs';
import countryList from '../templates/country-list.hbs';
import countryContainer from './refs';


function aboutCountryMarkup(data) {
  const markup = countryTpl(data);
  countryContainer.insertAdjacentHTML('beforeend', markup);
};

function countryListMarkup(data) {
  const markup = countryList(data);
  countryContainer.insertAdjacentHTML('beforeend', markup);
};

export { aboutCountryMarkup, countryListMarkup };