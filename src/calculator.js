export class Calculator{
  constructor(age) {
    this.age = age
  }

  toSeconds() {
    var seconds =  (this.age * 365 * 24 * 60 * 60);
    return seconds;
  } // toSeconds


} //Calculator
