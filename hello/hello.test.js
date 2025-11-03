const sayHello = require('./hello');

test('says hello to the given name', () => {
  expect(sayHello('World')).toBe('Hello, World!');
});
