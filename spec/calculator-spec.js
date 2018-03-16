import { Calculator } from '../src/calculator.js';

describe('calculator', function() {
  var person;

  beforeEach(function() {
    person = new Calculator('03/15/1980', 'female', 'USA');
  });

  it('creates a new instance to Calulate', function() {
    expect(person.birthDate).toEqual('03/15/1980');
    expect(person.gender).toEqual('female');
    expect(person.origin).toEqual('USA');
  });

  it('returns age', function() {
    var age = age.findAge();
    expect(age).toEqual(37)
  });

  // TEST 2
    // it('returns the exact age for an entered birth date', function() {
    //   var difference = age.subtractDates("03/16/17", "03/16/80");
    //   expect(difference).toEqual(1)
    // });
}); // describe calculator
