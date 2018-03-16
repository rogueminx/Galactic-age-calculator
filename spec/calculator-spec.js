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

  it('returns age in years', function() {
    var age = person.findAge();
    expect(age).toEqual(38);
  });

  it('returns age in seconds', function() {
    var age = person.findAge();
    expect(person.toSeconds()).toEqual(1198368000);
  });

  it('returns age in seconds from current date', function() {
    var age = person.findAge();
    var secondsAge = person.toSeconds();
    expect(person.ageInSeconds()).toBeGreaterThan(1198368000);
  });

  it('returns age in Mercury years', function() {
    var mercuryAge = person.mercuryAge();
    expect(mercuryAge).toEqual(9.12);
  });
}); // describe calculator
