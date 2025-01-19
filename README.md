# Builder Pattern for Tests

```js
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
```
