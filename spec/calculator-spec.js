import { Calculator } from '../src/calculator.js';

describe('calculator', function() {

  var age;

  beforeEach(function() {
    age = new Calculator(1);
  });

// TEST 1
  it('returns seconds for age', function() {
    var seconds = age.toSeconds();
    expect(seconds).toEqual(31536000)
  });
}); // describe calculator
