export class Calculator{
  constructor(birthDate, gender, origin) {
    this.birthDate = birthDate;
    this.gender = gender;
    this.origin = origin;
    this.age = 0;
  }

  toSeconds() {
    var seconds =  (this.age * 365 * 24 * 60 * 60);
    return seconds;
  } // toSeconds

  subtractDates(currentDate, birthDate) {
    var dateArray = currentDate.split("/");
    return dateArray;
  }

} //Calculator
