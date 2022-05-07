import { Potter } from './potter';

describe('Potter', () => {
  it('should create an instance', () => {
    expect(new Potter()).toBeTruthy();
  });

  test('testBasics', () => {
    const potter = new Potter();
    let books = [0];
    expect(potter.calculatePrice(books)).toBe(8);
  });
  test('testBasics', () => {
    const potter = new Potter();
    let books = [1];
    expect(potter.calculatePrice(books)).toBe(8);
  });
  test('testBasics', () => {
    const potter = new Potter();
    let books = [2];
    expect(potter.calculatePrice(books)).toBe(8);
  });
  test('testBasics', () => {
    const potter = new Potter();
    let books = [3];
    expect(potter.calculatePrice(books)).toBe(8);
  });
  test('testBasics', () => {
    const potter = new Potter();
    let books = [4];
    expect(potter.calculatePrice(books)).toBe(8);
  });
  test('testBasics', () => {
    const potter = new Potter();
    let books = [1, 1, 1];
    expect(potter.calculatePrice(books)).toBe(8 * 3);
  });
});

