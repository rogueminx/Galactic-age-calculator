export class Calculator{
  constructor(birthDate, gender, origin) {
    this.birthDate = birthDate;
    this.gender = gender;
    this.origin = origin;
    this.currentDate = 0;
    this.birthDateInSeconds = 0;
    this.age = 0;
    this.yearsLeft =0;
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
    let mercuryYears = Math.floor(this.age * .24);
    return mercuryYears;
  }

  venusAge() {
    let venusYears = Math.floor(this.age * .62);
    return venusYears;
  }

  marsAge() {
    let marsYears = Math.floor(this.age * 1.88);
    return marsYears;
  }

  jupiterAge() {
    let jupiterYears = Math.floor(this.age * 11.86);
    return jupiterYears;
  }

  earthLifeLeft() {
    if ((this.gender === "female") && (this.origin === 'Europe' || this.origin === 'North America' || this.origin === 'Australia')) {
      let averageLife = 83;
      this.yearsLeft = averageLife - this.age;
      return this.yearsLeft;
    } else if ((this.gender === "male") && (this.origin === 'Europe' || this.origin === 'North America' || this.origin === 'Australia')){
      let averageLife = 79;
      this.yearsLeft = averageLife - this.age;
      return this.yearsLeft;
    } else if ((this.gender === "female") && (this.origin === 'South America' || this.origin === 'Asia')){
      let averageLife = 74;
      this.yearsLeft = averageLife - this.age;
      return this.yearsLeft;
    } else if ((this.gender === "male") && (this.origin === 'South America' || this.origin === 'Asia')){
      let averageLife = 70;
      this.yearsLeft = averageLife - this.age;
      return this.yearsLeft;
    } else if ((this.gender === "female") && (this.origin === 'Africa')){
      let averageLife = 65;
      this.yearsLeft = averageLife - this.age;
      return this.yearsLeft;
    } else if ((this.gender === "male") && (this.origin === 'Africa')){
      let averageLife = 61;
      this.yearsLeft = averageLife - this.age;
      return this.yearsLeft;
    } else {
      let averageLife = 72;
      this.yearsLeft = averageLife - this.age;
      return this.yearsLeft;
    }
  }

  mercuryYears(){
    let mercYears = Math.floor(this.yearsLeft * .24) ;
    return mercYears;
  }

} //Calculator
