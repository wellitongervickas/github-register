import greaterThan from '@/helpers/validators/greaterThan';

describe('Helpers validators greaterThan', () => {
  test('should be defined', () => {
    expect(greaterThan.validate).toBeDefined();
    expect(greaterThan.message).toBeDefined();
  });

  test('should return a custom message', () => {
    expect(greaterThan.message(2, { count: 2 })).toBe('Must be greater than 2 characters');
    expect(greaterThan.message()).toBe('Must be greater than 0 characters');
    expect(greaterThan.message('oi', { count: 2 })).toBe(
      'Must be greater than 2 characters',
    );
  });

  test('should return a message when wrong value', () => {
    expect(greaterThan.validate()).toBe('Must be greater than 0 characters');
    expect(greaterThan.validate(null)).toBe('Must be greater than 0 characters');
    expect(greaterThan.validate(undefined)).toBe('Must be greater than 0 characters');
    expect(greaterThan.validate('')).toBe('Must be greater than 0 characters');

    expect(
      greaterThan.validate('2', {
        count: 4,
      }),
    ).toBe('Must be greater than 4 characters');

    expect(
      greaterThan.validate(5, {
        count: 4,
      }),
    ).toBe('Must be greater than 4 characters');

    expect(
      greaterThan.validate('5', {
        count: 4,
      }),
    ).toBe('Must be greater than 4 characters');
  });

  test('should return null when valid value', () => {
    expect(
      greaterThan.validate('22225', {
        count: 4,
      }),
    ).toBeNull();

    expect(
      greaterThan.validate('12345', {
        count: 4,
      }),
    ).toBeNull();
  });
});
