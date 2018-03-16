export class Calculator{
  constructor(birthDate, gender, origin) {
    this.birthDate = birthDate;
    this.gender = gender;
    this.origin = origin;
    this.currentDate = 0;
    this.birthDateInSeconds = 0;
    this.age = 0;
  }

  findAge() {
    let currentDate = new Date();
    this.currentDate = currentDate
    let currentYear = currentDate.getFullYear();
    let birthdate = new Date(this.birthDate);
    this.birthDateInSeconds = birthdate;
    let birthYear = birthdate.getFullYear();
    let age = (currentYear - birthYear);
    this.age = age
    return this.age;
  }

  toSeconds() {
    let birthSeconds =  (this.age * 365 * 24 * 60 * 60);
    return birthSeconds;
  }

  ageInSeconds() {
    let date = this.currentDate;
    let birthday = this.birthDateInSeconds;
    let difference = Math.floor((date - birthday)/1000);
    return difference;
  }

  mercuryAge() {
    let mercuryYears = this.age * .24;
    return mercuryYears;
  }

  venusAge() {
    let venusYears = this.age * .62;
    return venusYears;
  }

} //Calculator
