// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTesting using AI Type Open AI and AI Model gpt-4-1106-preview

ROOST_METHOD_HASH=8f3d2d7938
ROOST_METHOD_SIG_HASH=6c406ecd77


*/

// ********RoostGPT********
const helloWeather = require('../test/weather-kit-test');

describe('weather kit module', () => {
  let monday, tuesday, wednesday, thursday, friday;

  beforeAll(() => {
    monday = { temperature: 15, weather: 'rainy', humidity: 80 };
    tuesday = { temperature: 25, weather: 'partly cloudy', humidity: 50 };
    wednesday = { temperature: 30, weather: 'sunny', humidity: 20 };
    thursday = { temperature: 10, weather: 'cloudy', humidity: 30 };
    friday = { temperature: 13, weather: 'rainy', humidity: 90 };
  });

  test('should return true for umbrella test if it is raining', () => {
    expect(helloWeather.doINeed.umbrella(monday)).toBe(true);
    expect(helloWeather.doINeed.umbrella(tuesday)).toBe(false);
    expect(helloWeather.doINeed.umbrella(wednesday)).toBe(false);
    expect(helloWeather.doINeed.umbrella(friday)).toBe(true);
  });

  test('should return true if suncream is required on sunny days', () => {
    expect(helloWeather.doINeed.suncream(monday)).toBe(false);
    expect(helloWeather.doINeed.suncream(tuesday)).toBe(false);
    expect(helloWeather.doINeed.suncream(wednesday)).toBe(true);
  });

  test('should return true if jumper is required on cold days', () => {
    expect(helloWeather.doINeed.jumper(monday)).toBe(monday.temperature <= 20);
    expect(helloWeather.doINeed.jumper(tuesday)).toBe(tuesday.temperature <= 20);
    expect(helloWeather.doINeed.jumper(wednesday)).toBe(wednesday.temperature <= 20);
    expect(helloWeather.doINeed.jumper(thursday)).toBe(thursday.temperature <= 20);
  });

  test('should always return true as water is always required', () => {
    expect(helloWeather.doINeed.water(monday)).toBe(true);
  });
});

