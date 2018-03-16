import { Calculator } from '../src/calculator.js';

describe('calculator', function() {
  var person;

  beforeEach(function() {
    person = new Calculator('03/15/1980', 'female', 'Europe');
  });

  it('creates a new instance to Calulate', function() {
    expect(person.birthDate).toEqual('03/15/1980');
    expect(person.gender).toEqual('female');
    expect(person.origin).toEqual('Europe');
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
    expect(mercuryAge).toEqual(9);
  });

  it('returns age in Venus years', function() {
    person.findAge();
    var venusAge = person.venusAge();
    expect(venusAge).toEqual(23);
  });

  it('returns age in Mars years', function() {
    person.findAge();
    var marsAge = person.marsAge();
    expect(marsAge).toEqual(71);
  });

  it('returns age in Jupiter years', function() {
    person.findAge();
    var jupiterAge = person.jupiterAge();
    expect(jupiterAge).toEqual(450);
  });

  it('returns the average age you have left on plant Earth.', function() {
    person.findAge();
    expect(person.earthLifeLeft()).toEqual(45);
  });

  it('returns Mercury years left', function() {
    person.findAge();
    person.earthLifeLeft();
    expect(person.mercuryYears()).toEqual(10);
  });

  it('returns Mercury years left', function() {
    person.findAge();
    person.earthLifeLeft();
    expect(person.venusYears()).toEqual(27);
  });

  it('returns Mars years left', function() {
    person.findAge();
    person.earthLifeLeft();
    expect(person.marsYears()).toEqual(84);
  });

  it('returns Jupiter years left', function() {
    person.findAge();
    person.earthLifeLeft();
    expect(person.jupiterYears()).toEqual(533);
  });

  it('returns the number of years you have lived past the average life epectancy.', function() {
    var oldPerson = new Calculator('03/15/1912', 'female', 'Europe')
    var oldAge = oldPerson.findAge();
    expect(oldAge).toEqual(106);
    var yearsLeft = oldPerson.earthLifeLeft();
    expect(yearsLeft).toEqual(23);
  });
}); // describe calculator
