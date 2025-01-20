const { AddressBuilder } = require('./address-builder');
const { AddressValidator } = require('./address-validator');

describe('Address Validator Tests', () => {
  
  it('should should be a valid address', () => {
    const address = new AddressBuilder().build();
    const result = AddressValidator.validate(address);
    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual([]);
  });

  it('should fail because the zip code is missing', () => {
    const address = new AddressBuilder().removeZipCode().build();
    const result = AddressValidator.validate(address);
    expect(result.isValid).toBe(false);
    expect(result.errors).toEqual([
      { field: 'zipCode', message: 'Zip Code is required and must be a string with 5 to 10 digits.' },
    ]);
  });

  it('should fail because the state is missing', () => {
    const address = new AddressBuilder().removeState().build();
    const result = AddressValidator.validate(address);
    expect(result.isValid).toBe(false);
    expect(result.errors).toEqual([
      { field: 'state', message: 'State is required and must be a non-empty string.' },
    ]);
  });
});