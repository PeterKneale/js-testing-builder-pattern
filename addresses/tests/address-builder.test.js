const { AddressBuilder } = require('./address_builder');

describe('Address Builder Tests', () => {

  it('should build an address with  values', () => {
    const address = new AddressBuilder().build();
    expect(address.line1).toBe('123 Default Street');
    expect(address.city).toBe('Default City');
    expect(address.state).toBe('DS');
    expect(address.zipCode).toBe('12345');
  });

  it('should build an address with custom values', () => {
    const address = new AddressBuilder()
      .setLine1('456 Custom Street')
      .setCity('Gotham City')
      .setState('OH')
      .setCountry('US')
      .setZipCode('43210')
      .build();

    expect(address.line1).toBe('456 Custom Street');
    expect(address.city).toBe('Gotham City');
    expect(address.state).toBe('OH');
    expect(address.country).toBe('US');
    expect(address.zipCode).toBe('43210');
  });

  it('should have no zip code', () => {
    const address = new AddressBuilder()
      .removeZipCode()
      .build();
    expect(address.zipCode).toBe('');
  });

  it('should have no state', () => {
    const address = new AddressBuilder()
      .removeState()
      .build();
    expect(address.state).toBe('');
  });
});