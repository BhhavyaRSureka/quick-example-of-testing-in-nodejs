// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTesting using AI Type Open AI and AI Model gpt-4-1106-preview

ROOST_METHOD_HASH=getRainFall_d54b81da79
ROOST_METHOD_SIG_HASH=getRainFall_76e9e0bca8


*/

// ********RoostGPT********
# File: __tests__/fetch-weather.test.js

const getRainFall = require('../fetch-weather').getRainFall;

describe('getRainFall', () => {
  test('it should return 0 if rainObj is null or undefined', () => {
    expect(getRainFall(null)).toBe(0);
    expect(getRainFall(undefined)).toBe(0);
  });

  test('it should return 0 if rainObj does not contain 1h, 2h, or 3h keys', () => {
    expect(getRainFall({})).toBe(0);
    expect(getRainFall({ someKey: 10 })).toBe(0);
  });

  test('it should return the value of the 1h key if it exists', () => {
    expect(getRainFall({ '1h': 5 })).toBe(5);
  });

  test('it should return the value of the 2h key if 1h does not exist but 2h does', () => {
    expect(getRainFall({ '2h': 10 })).toBe(10);
  });

  test('it should return the value of the 3h key if 1h and 2h do not exist but 3h does', () => {
    expect(getRainFall({ '3h': 15 })).toBe(15);
  });

  test('it should prioritize 1h over 2h and 3h if multiple keys exist', () => {
    expect(getRainFall({ '1h': 5, '2h': 10, '3h': 15 })).toBe(5);
  });

  test('it should prioritize 2h over 3h if both exist but 1h does not', () => {
    expect(getRainFall({ '2h': 10, '3h': 15 })).toBe(10);
  });

  test('it should handle numeric values as strings', () => {
    expect(getRainFall({ '1h': '5' })).toBe(5);
  });

  test('it should handle non-numeric values gracefully', () => {
    expect(getRainFall({ '1h': 'rain' })).toBe('rain');
  });
});

