import { Calculator } from '../src/calculator.js';

describe('calculator', function() {

  var person;

  beforeEach(function() {
    person = new Calculator('03/16/1980', 'female', 'USA');
  });

// TEST 1
  it('creates a new instance to Calulate', function() {
    expect(person.birthDate).toEqual('03/16/1980');
    expect(person.gender).toEqual('female');
    expect(person.origin).toEqual('USA');
  });



// TEST 2
  // it('returns seconds for age', function() {
  //   var seconds = age.toSeconds();
  //   expect(seconds).toEqual(31536000)
  // });

  // TEST 2
    // it('returns the exact age for an entered birth date', function() {
    //   var difference = age.subtractDates("03/16/17", "03/16/80");
    //   expect(difference).toEqual(1)
    // });
}); // describe calculator
