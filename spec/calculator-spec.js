import { Calculator } from '../src/calculator.js';

describe('calculator', function() {
  let person;

  beforeEach(function() {
    person = new Calculator('03/15/1980', 'female', 'Europe');
  });

  it('creates a new instance to Calulate', function() {
    expect(person.birthDate).toEqual('03/15/1980');
    expect(person.gender).toEqual('female');
    expect(person.origin).toEqual('Europe');
  });

  it('returns age in years', function() {
    let age = person.findAge();
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
    let mercuryAge = person.mercuryAge();
    expect(mercuryAge).toEqual(158);
  });

  it('returns age in Venus years', function() {
    person.findAge();
    let venusAge = person.venusAge();
    expect(venusAge).toEqual(61);
  });

  it('returns age in Mars years', function() {
    person.findAge();
    let marsAge = person.marsAge();
    expect(marsAge).toEqual(20);
  });

  it('returns age in Jupiter years', function() {
    person.findAge();
    let jupiterAge = person.jupiterAge();
    expect(jupiterAge).toEqual(3);
  });

  it('returns the average age you have left on plant Earth.', function() {
    person.findAge();
    expect(person.earthLifeLeft()).toEqual(45);
  });

  it('returns Mercury years left', function() {
    person.findAge();
    person.earthLifeLeft();
    expect(person.mercuryYears()).toEqual(187);
  });

  it('returns Mercury years left', function() {
    person.findAge();
    person.earthLifeLeft();
    expect(person.venusYears()).toEqual(72);
  });

  it('returns Mars years left', function() {
    person.findAge();
    person.earthLifeLeft();
    expect(person.marsYears()).toEqual(23);
  });

  it('returns Jupiter years left', function() {
    person.findAge();
    person.earthLifeLeft();
    expect(person.jupiterYears()).toEqual(3);
  });

  it('returns the number of years you have lived past the average life epectancy.', function() {
    let oldPerson = new Calculator('03/15/1912', 'female', 'Europe')
    let oldAge = oldPerson.findAge();
    expect(oldAge).toEqual(106);
    let yearsLeft = oldPerson.earthLifeLeft();
    expect(yearsLeft).toEqual(23);
  });
}); // describe calculator
