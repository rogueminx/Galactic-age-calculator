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

  marsAge() {
    let marsYears = this.age * 1.88;
    return marsYears;
  }

  jupiterAge() {
    let jupiterYears = Math.floor(this.age * 11.86);
    return jupiterYears;
  }

  earthLifeLeft() {
    if ((this.gender === "female") && (this.origin === 'Europe' || this.origin === 'North America' || this.origin === 'Australia')) {
      let averageLife = 83;
      return averageLife - this.age;
    } else if ((this.gender === "male") && (this.origin === 'Europe' || this.origin === 'North America' || this.origin === 'Australia')){
      let averageLife = 79;
      return averageLife - this.age;
    } else if ((this.gender === "female") && (this.origin === 'South America' || this.origin === 'Asia')){
      let averageLife = 74;
      return averageLife - this.age;
    } else if ((this.gender === "male") && (this.origin === 'South America' || this.origin === 'Asia')){
      let averageLife = 70;
      return averageLife - this.age;
    } else if ((this.gender === "female") && (this.origin === 'Africa')){
      let averageLife = 65;
      return averageLife - this.age;
    } else if ((this.gender === "male") && (this.origin === 'Africa')){
      let averageLife = 61;
      return averageLife - this.age;
    } else {
      let averageLife = 72;
      return averageLife - this.age;
    }
  }

} //Calculator
