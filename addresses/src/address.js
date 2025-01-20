class Address {
    constructor({ line1 = '', line2 = '', line3 = '', city = '', state = '', country = '', zipCode = '' } = {}) {
      this.line1 = line1;
      this.line2 = line2;
      this.line3 = line3;
      this.city = city;
      this.state = state;
      this.country = country;
      this.zipCode = zipCode;
    }
  }
  module.exports = { Address };