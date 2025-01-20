class AddressValidator {
    /**
     * Validates the given address object.
     * @param {Object} address - The address object to validate.
     * @returns {Object} - An object containing isValid (boolean) and errors (array of error details).
     */
    static validate(address) {
      const errors = [];
  
      // Field validation rules
      if (!address.line1 || typeof address.line1 !== 'string' || address.line1.trim() === '') {
        errors.push({ field: 'line1', message: 'Line 1 is required and must be a non-empty string.' });
      }
  
      if (address.line2 && typeof address.line2 !== 'string') {
        errors.push({ field: 'line2', message: 'Line 2 must be a string if provided.' });
      }
  
      if (address.line3 && typeof address.line3 !== 'string') {
        errors.push({ field: 'line3', message: 'Line 3 must be a string if provided.' });
      }
  
      if (!address.city || typeof address.city !== 'string' || address.city.trim() === '') {
        errors.push({ field: 'city', message: 'City is required and must be a non-empty string.' });
      }
  
      if (!address.state || typeof address.state !== 'string' || address.state.trim() === '') {
        errors.push({ field: 'state', message: 'State is required and must be a non-empty string.' });
      }
  
      if (!address.country || typeof address.country !== 'string' || address.country.trim() === '') {
        errors.push({ field: 'country', message: 'Country is required and must be a non-empty string.' });
      }
  
      if (!address.zipCode || typeof address.zipCode !== 'string' || !/^\d{5,10}$/.test(address.zipCode)) {
        errors.push({ field: 'zipCode', message: 'Zip Code is required and must be a string with 5 to 10 digits.' });
      }
  
      // Determine if the address is valid (no errors)
      const isValid = errors.length === 0;
  
      return { isValid, errors };
    }
  }
  
  module.exports = { AddressValidator };