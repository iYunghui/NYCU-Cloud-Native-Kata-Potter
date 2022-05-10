import { Potter } from './potter';

describe('Potter', () => {
  let potter: Potter;
  beforeEach(()=> {
    potter = new Potter();
  });

  it('should create an instance', () => {
    expect(new Potter()).toBeTruthy();
  });

  test('testBasics', () => {
    let books = [0];
    expect(potter.calculatePrice(books)).toBe(8);
  });
  test('testBasics', () => {
    let books = [1];
    expect(potter.calculatePrice(books)).toBe(8);
  });
  test('testBasics', () => {
    let books = [2];
    expect(potter.calculatePrice(books)).toBe(8);
  });
  test('testBasics', () => {
    let books = [3];
    expect(potter.calculatePrice(books)).toBe(8);
  });
  test('testBasics', () => {
    let books = [4];
    expect(potter.calculatePrice(books)).toBe(8);
  });
  test('testBasics', () => {
    let books = [1, 1, 1];
    expect(potter.calculatePrice(books)).toBe(8 * 3);
  });

  test('testSimpleDiscounts', () => {
    let books = [0, 1];
    expect(potter.calculatePrice(books)).toBe(8 * 2 * 0.95);
  });
  test('testSimpleDiscounts', () => {
    let books = [0, 2, 4];
    expect(potter.calculatePrice(books)).toBe(8 * 3 * 0.9);
  });
  test('testSimpleDiscounts', () => {
    let books = [0, 1, 2, 4];
    expect(potter.calculatePrice(books)).toBe(8 * 4 * 0.8);
  });
  test('testSimpleDiscounts', () => {
    let books = [0, 1, 2, 3, 4];
    expect(potter.calculatePrice(books)).toBe(8 * 5 * 0.75);
  });

  test('testSeveralDiscounts', () => {
    let books = [0, 0, 1];
    expect(potter.calculatePrice(books)).toBe(8 + (8 * 2 * 0.95));
  });
  test('testSeveralDiscounts', () => {
    let books = [0, 0, 1, 1];
    expect(potter.calculatePrice(books)).toBe(2 * (8 * 2 * 0.95));
  });
  test('testSeveralDiscounts', () => {
    let books = [0, 0, 1, 2, 2, 3];
    expect(potter.calculatePrice(books)).toBe((8 * 4 * 0.8) + (8 * 2 * 0.95));
  });
  test('testSeveralDiscounts', () => {
    let books = [0, 1, 1, 2, 3, 4];
    expect(potter.calculatePrice(books)).toBe(8 + (8 * 5 * 0.75));
  });

  test('testEdgeCases', () => {
    let books = [0, 0, 1, 1, 2, 2, 3, 4];
    expect(potter.calculatePrice(books)).toBe(2 * (8 * 4 * 0.8));
  });
  test('testEdgeCases', () => {
    let books = [0, 0, 0, 0, 0, 
                 1, 1, 1, 1, 1, 
                 2, 2, 2, 2, 
                 3, 3, 3, 3, 3, 
                 4, 4, 4, 4];
    expect(potter.calculatePrice(books)).toBe(3 * (8 * 5 * 0.75) + 2 * (8 * 4 * 0.8));
  });
});

