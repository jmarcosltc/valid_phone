'use strict'

const { Country } = require('./index');

let countryName = 'BRAZIL';
let phoneNumber = '12345678901';

const country = new Country(countryName, phoneNumber);

console.log(country.formattedPhoneNumber);
