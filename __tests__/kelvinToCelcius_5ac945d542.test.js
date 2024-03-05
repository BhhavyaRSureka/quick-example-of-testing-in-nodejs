// ********RoostGPT********
/*
Test generated by RoostGPT for test NodeTesting using AI Type Open AI and AI Model gpt-4-1106-preview

ROOST_METHOD_HASH=kelvinToCelcius_c4e254281d
ROOST_METHOD_SIG_HASH=kelvinToCelcius_5ac945d542


*/

// ********RoostGPT********
// Import Mocha's describe and it test functions
// const {  it } = require('mocha');
// Require the expect module from Chai assertion library
const expect = require('chai').expect;
// Import the function to be tested
const { kelvinToCelcius } = require('../fetch-weather');

// Test suite for kelvinToCelsius method
describe('kelvinToCelsius', function() {
  
  // Define a separate context for success scenarios
  describe('when given a temperature in Kelvin', function() {
    // Test case for a normal temperature value
    it('should convert positive Kelvin to Celsius correctly', function() {
      const result = kelvinToCelcius(300);
      expect(result).to.be.closeTo(26.85, 1);
    });

    // Test case for absolute zero
    it('should convert absolute zero Kelvin to Celsius correctly', function() {
      const result = kelvinToCelcius(0);
      expect(result).to.be.closeTo(-273.15, 0.5);
    });
  });

  // Define a separate context for edge and failure cases
  describe('when given an invalid temperature', function() {
    // Test case for a non-numeric value
    it('should throw an error for a non-numeric value', function() {
      expect(() => kelvinToCelcius('Invalid input')).to.throw(TypeError, 'Invalid temperature value');
    });

    // Test case for a null value
    it('should throw an error for a null value', function() {
      expect(() => kelvinToCelcius(null)).to.throw(TypeError, 'Invalid temperature value');
    });

    // Test case for undefined value
    it('should throw an error for an undefined value', function() {
      expect(() => kelvinToCelcius(undefined)).to.throw(TypeError, 'Invalid temperature value');
    });

    // Test case for negative Kelvin values
    it('should handle negative Kelvin values reasonably', function() {
      const result = kelvinToCelcius(-10);
      expect(result).to.be.below(-273.15);
    });
  });

  // OPTIONAL: Use beforeEach or afterEach if setup or teardown is necessary
  // beforeEach(function() {
  //   // setup code if needed
  // });
  
  // afterEach(function() {
  //   // cleanup code if needed
  // });

});

