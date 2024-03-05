// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTesting using AI Type Open AI and AI Model gpt-4-1106-preview

ROOST_METHOD_HASH=averagteTemp_aab1d2fafe
ROOST_METHOD_SIG_HASH=averagteTemp_ca192d32f1


*/

// ********RoostGPT********
import os

# Create the Jest test file content
jest_test_content = """
const averageTemp = require('./prepared-for-the-weather').averageTemp;

describe('averageTemp function', () => {
  // Setup if needed
  beforeAll(() => {
    // Code to execute before all tests
  });

  beforeEach(() => {
    // Code to execute before each test
  });

  afterEach(() => {
    // Code to execute after each test
  });

  afterAll(() => {
    // Code to execute after all tests
  });

  // Test cases
  test('should correctly calculate the average of two temperatures', () => {
    const min = 15;
    const max = 25;
    const expectedAverage = (min + max) / 2;
    expect(averageTemp(min, max)).toBe(expectedAverage);
  });

  test('should handle negative temperatures', () => {
    const min = -10;
    const max = 5;
    const expectedAverage = (min + max) / 2;
    expect(averageTemp(min, max)).toBe(expectedAverage);
  });

  test('should return the same value when both temperatures are equal', () => {
    const temp = 20;
    const expectedAverage = temp;
    expect(averageTemp(temp, temp)).toBe(expectedAverage);
  });

  test('should return NaN when one of the arguments is not a number', () => {
    expect(averageTemp('a', 20)).toBeNaN();
    expect(averageTemp(20, 'b')).toBeNaN();
  });

  test('should return Infinity when one of the arguments is Infinity', () => {
    expect(averageTemp(Infinity, 20)).toBe(Infinity);
    expect(averageTemp(20, Infinity)).toBe(Infinity);
  });
});
"""

# Define paths
jest_file_path = '/mnt/data/averageTemp.test.js'
prepared_weather_path = '/mnt/data/prepared-for-the-weather.js'

# Save Jest test case to file
with open(jest_file_path, 'w') as file:
    file.write(jest_test_content)

# Create a mock prepared-for-the-weather.js with a dummy averageTemp function
prepared_for_the_weather_content = """
function averageTemp(min, max) {
  return (min + max) / 2;
}

module.exports = { averageTemp };
"""

# Saving the prepared-for-the-weather module
with open(prepared_weather_path, 'w') as file:
    file.write(prepared_for_the_weather_content)

# Return paths to the saved files
jest_file_path, prepared_weather_path

