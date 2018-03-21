export class Calculator{
  constructor(birthDate, gender, origin) {
    this.birthDate = birthDate;
    this.gender = gender;
    this.origin = origin;
    this.currentDate = 0;
    this.birthDateInSeconds = 0;
    this.age = 0;
    this.yearsLeft = 0;
    this.extraYears = 0;
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
    let mercuryYears = Math.floor(this.age / .24); // Question : should I have set this (.24) to a const variable?
    return mercuryYears;
  }

  venusAge() {
    let venusYears = Math.floor(this.age / .62);
    return venusYears;
  }

  marsAge() {
    let marsYears = Math.floor(this.age / 1.88);
    return marsYears;
  }

  jupiterAge() {
    let jupiterYears = Math.floor(this.age / 11.86);
    return jupiterYears;
  }

  earthLifeLeft() {
    if ((this.gender === "female") && (this.origin === 'Europe' || this.origin === 'North America' || this.origin === 'Australia')) {
      let averageLife = 83;
      let difference = averageLife - this.age;
        if (difference < 0) {
          this.extraYears = Math.abs(difference);
          return this.extraYears;
        } else this.yearsLeft = difference;
          return this.yearsLeft;
    } else if ((this.gender === "male") && (this.origin === 'Europe' || this.origin === 'North America' || this.origin === 'Australia')){
      let averageLife = 79;
      let difference = averageLife - this.age;
        if (difference < 0) {
          this.extraYears = Math.abs(difference);
          return this.extraYears;
        } else this.yearsLeft = difference;
          return this.yearsLeft;
    } else if ((this.gender === "female") && (this.origin === 'South America' || this.origin === 'Asia')){
      let averageLife = 74;
      let difference = averageLife - this.age;
        if (difference < 0) {
          this.extraYears = Math.abs(difference);
          return this.extraYears;
        } else this.yearsLeft = difference;
          return this.yearsLeft;
    } else if ((this.gender === "male") && (this.origin === 'South America' || this.origin === 'Asia')){
      let averageLife = 70;
      let difference = averageLife - this.age;
        if (difference < 0) {
          this.extraYears = Math.abs(difference);
          return this.extraYears;
        } else this.yearsLeft = difference;
          return this.yearsLeft;
    } else if ((this.gender === "female") && (this.origin === 'Africa')){
      let averageLife = 65;
      let difference = averageLife - this.age;
        if (difference < 0) {
          this.extraYears = Math.abs(difference);
          return this.extraYears;
        } else this.yearsLeft = difference;
          return this.yearsLeft;
    } else if ((this.gender === "male") && (this.origin === 'Africa')){
      let averageLife = 61;
      let difference = averageLife - this.age;
        if (difference < 0) {
          this.extraYears = Math.abs(difference);
          return this.extraYears;
        } else this.yearsLeft = difference;
          return this.yearsLeft;
    } else {
      let averageLife = 72;
      let difference = averageLife - this.age;
        if (difference < 0) {
          this.extraYears = Math.abs(difference);
          return this.extraYears;
        } else this.yearsLeft = difference;
          return this.yearsLeft;
    }
  }

  mercuryYears(){
    let mercYears = Math.floor(this.yearsLeft / .24) ;
    return mercYears;
  }

  venusYears(){
    let venusYears = Math.floor(this.yearsLeft / .62) ;
    return venusYears;
  }

  marsYears(){
    let marsYears = Math.floor(this.yearsLeft / 1.88) ;
    return marsYears;
  }

  jupiterYears(){
    let jupiterYears = Math.floor(this.yearsLeft / 11.86) ;
    return jupiterYears;
  }

} //Calculator
