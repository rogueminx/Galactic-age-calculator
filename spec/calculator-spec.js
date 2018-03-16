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
    person.findAge();
    expect(person.toSeconds()).toEqual(1198368000);
  });

  it('returns age in seconds from current date', function() {
    person.findAge();
    person.toSeconds();
    expect(person.ageInSeconds()).toBeGreaterThan(1198368000);
  });

  it('returns age in Mercury years', function() {
    person.findAge();
    var mercuryAge = person.mercuryAge();
    expect(mercuryAge).toEqual(9.12);
  });

  it('returns age in Venus years', function() {
    person.findAge();
    var venusAge = person.venusAge();
    expect(venusAge).toEqual(23.56);
  });

  it('returns age in Mars years', function() {
    person.findAge();
    var marsAge = person.marsAge();
    expect(marsAge).toEqual(71.44);
  });

  it('returns age in Jupiter years', function() {
    person.findAge();
    var jupiterAge = person.jupiterAge();
    expect(jupiterAge).toEqual(450);
  });
}); // describe calculator
