export class Calculator{
  constructor(birthDate, gender, origin) {
    this.birthDate = birthDate;
    this.gender = gender;
    this.origin = origin;
    this.age = 0;
  }

  findAge() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var birthdate = new Date(this.birthDate);
    var birthYear = birthdate.getFullYear();
    var age = (currentYear - birthYear);
    this.age = age
    return this.age;
  }

  toSeconds() {
    var seconds =  (this.age * 365 * 24 * 60 * 60);
    return seconds;
  }

  subtractDates(currentDate, birthDate) {
    var dateArray = currentDate.split("/")
      dateArray.forEach(function(num){
        parseInt(num);
      })

    // .join(",");
    return dateArray;
  }

} //Calculator
