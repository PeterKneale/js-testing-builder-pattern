const { Address } = require('../src/address');

class AddressBuilder {
  constructor() {
    this.address = {
      line1: '123 Default Street',
      line2: '',
      line3: '',
      city: 'Default City',
      state: 'DS',
      country: 'Default Country',
      zipCode: '12345',
    };
  }

  setLine1(line1) {
    this.address.line1 = line1;
    return this;
  }

  setLine2(line2) {
    this.address.line2 = line2;
    return this;
  }

  setLine3(line3) {
    this.address.line3 = line3;
    return this;
  }

  setCity(city) {
    this.address.city = city;
    return this;
  }

  setState(state) {
    this.address.state = state;
    return this;
  }

  setCountry(country) {
    this.address.country = country;
    return this;
  }

  setZipCode(zipCode) {
    this.address.zipCode = zipCode;
    return this;
  }
  
  removeZipCode() {
    delete this.address.zipCode;
    return this;
  }
  
  removeState() {
    delete this.address.state;
    return this;
  }

  build() {
    return new Address(this.address);
  }
}
module.exports = { AddressBuilder };