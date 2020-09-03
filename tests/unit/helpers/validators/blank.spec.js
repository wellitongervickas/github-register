import blank from '@/helpers/validators/blank';

describe('Helpers validators blank', () => {
  test('should be defined', () => {
    expect(blank.validate).toBeDefined();
    expect(blank.message).toBeDefined();
  });
  test('should return a message when wrong value', () => {
    expect(blank.validate()).toBe('Required field');
    expect(blank.validate(null)).toBe('Required field');
    expect(blank.validate(undefined)).toBe('Required field');
    expect(blank.validate('')).toBe('Required field');
  });

  test('should return null when valid value', () => {
    expect(blank.validate(0)).toBeNull();
    expect(blank.validate('0')).toBeNull();
    expect(blank.validate('null')).toBeNull();
    expect(blank.validate('undefined')).toBeNull();
    expect(blank.validate('im a text')).toBeNull();
  });
});
