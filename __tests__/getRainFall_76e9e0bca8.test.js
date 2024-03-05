// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTesting using AI Type Open AI and AI Model gpt-4-1106-preview

ROOST_METHOD_HASH=getRainFall_d54b81da79
ROOST_METHOD_SIG_HASH=getRainFall_76e9e0bca8


*/

// ********RoostGPT********
const { describe, it, expect, beforeEach, afterEach } = require('@jest/globals');
const getRainFall = require('../fetch-weather').getRainFall; // Adjust relative path as necessary

describe('getRainFall Function', () => {
  beforeEach(() => {
    // Any set up needed before each test goes here
  });

  afterEach(() => {
    // Clean up after each test if necessary
  });

  it('should return 0 if input is undefined', () => {
    const result = getRainFall(undefined);
    expect(result).toBe(0);
  });

  it('should return 0 if input is null', () => {
    const result = getRainFall(null);
    expect(result).toBe(0);
  });

  it('should return 0 if no rain data is present', () => {
    const result = getRainFall({});
    expect(result).toBe(0);
  });

  it('should return rain amount for the 1-hour interval if present', () => {
    const result = getRainFall({ '1h': 5 });
    expect(result).toBe(5);
  });

  it('should return rain amount for the 2-hour interval if 1-hour interval is not present', () => {
    const result = getRainFall({ '2h': 3 });
    expect(result).toBe(3);
  });

  it('should return rain amount for the 3-hour interval if 1-hour and 2-hour intervals are not present', () => {
    const result = getRainFall({ '3h': 2 });
    expect(result).toBe(2);
  });

  it('should return 0 if none of the properties 1h, 2h, 3h are present', () => {
    const result = getRainFall({ '4h': 1 });
    expect(result).toBe(0);
  });

  it('should preferentially return 1-hour rain amount over others', () => {
    const result = getRainFall({ '1h': 10, '3h': 2 });
    expect(result).toBe(10);
  });

  it('should preferentially return 2-hour rain amount over 3-hour if 1-hour is not present', () => {
    const result = getRainFall({ '2h': 4, '3h': 2 });
    expect(result).toBe(4);
  });
});

