// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTesting using AI Type Open AI and AI Model gpt-4-1106-preview

ROOST_METHOD_HASH=4c53294148
ROOST_METHOD_SIG_HASH=dc35180642


*/

// ********RoostGPT********
// __tests__/fetchWeather.test.js

jest.mock('../app', () => {
  const originalModule = jest.requireActual('../app');
  return {
    ...originalModule,
    fetchWeather: jest.fn(),
    doINeed: jest.fn(() => ({
      umbrella: jest.fn(),
      suncream: jest.fn(),
      jumper: jest.fn(),
      water: jest.fn(),
    })),
    printLine: jest.fn(),
  };
});

const { fetchWeather, doINeed, printLine } = require('../app');

describe('fetchWeather method', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('calls printLine with correct arguments when weather is rainy', () => {
    // Given
    const today = { forecast: 'rainy' };
    fetchWeather.mockImplementation((location, callback) => {
      callback(today);
    });
    const { umbrella, suncream, jumper, water } = doINeed();
    umbrella.mockReturnValue(true);
    suncream.mockReturnValue(false);
    jumper.mockReturnValue(true);
    water.mockReturnValue(false);

    // When
    const location = 'London';
    fetchWeather(location, (today) => {
      const weatherKit = [
        { name: 'Umbrella', value: umbrella(today) },
        { name: 'Suncream', value: suncream(today) },
        { name: 'Jumper', value: jumper(today) },
        { name: 'Water', value: water(today) },
      ];
      weatherKit.forEach((item) => {
        printLine(item.value, item.name);
      });
    });

    // Then
    expect(umbrella).toHaveBeenCalledWith(today);
    expect(suncream).toHaveBeenCalledWith(today);
    expect(jumper).toHaveBeenCalledWith(today);
    expect(water).toHaveBeenCalledWith(today);
    expect(printLine.mock.calls).toEqual([
      [true, 'Umbrella'],
      [false, 'Suncream'],
      [true, 'Jumper'],
      [false, 'Water'],
    ]);
  });

  test('calls printLine with correct arguments when weather is sunny', () => {
    // Given
    const today = { forecast: 'sunny' };
    fetchWeather.mockImplementation((location, callback) => {
      callback(today);
    });
    const { umbrella, suncream, jumper, water } = doINeed();
    umbrella.mockReturnValue(false);
    suncream.mockReturnValue(true);
    jumper.mockReturnValue(false);
    water.mockReturnValue(true);

    // When
    const location = 'Miami';
    fetchWeather(location, (today) => {
      const weatherKit = [
        { name: 'Umbrella', value: umbrella(today) },
        { name: 'Suncream', value: suncream(today) },
        { name: 'Jumper', value: jumper(today) },
        { name: 'Water', value: water(today) },
      ];
      weatherKit.forEach((item) => {
        printLine(item.value, item.name);
      });
    });

    // Then
    expect(umbrella).toHaveBeenCalledWith(today);
    expect(suncream).toHaveBeenCalledWith(today);
    expect(jumper).toHaveBeenCalledWith(today);
    expect(water).toHaveBeenCalledWith(today);
    expect(printLine.mock.calls).toEqual([
      [false, 'Umbrella'],
      [true, 'Suncream'],
      [false, 'Jumper'],
      [true, 'Water'],
    ]);
  });

  test('handles an error if weather data cannot be fetched', () => {
    // Given
    const error = new Error('Cannot fetch weather');
    fetchWeather.mockImplementation((location, callback) => {
      throw error;
    });

    // When
    const location = 'Unknown';
    expect(() => {
      fetchWeather(location, () => {});
    }).toThrowError(error);

    // Then
    expect(umbrella).not.toHaveBeenCalled();
    expect(suncream).not.toHaveBeenCalled();
    expect(jumper).not.toHaveBeenCalled();
    expect(water).not.toHaveBeenCalled();
    expect(printLine).not.toHaveBeenCalled();
  });
});

