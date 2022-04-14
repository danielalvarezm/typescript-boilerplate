import {sayHelloWorld} from '../src/main';

describe('Basic test should', () => {
  it('say "Hello World"', () => {
    expect(sayHelloWorld() ).toBe('Hello World');
  });
});
