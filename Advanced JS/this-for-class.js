class Student {
  static callFunc = 0;
  constructor(name, age, phone, boardMarks) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.boardMarks = boardMarks;

    Student.callFunc += 1;
  }

  isEligible() {
    if (this.boardMarks > 40) {
      return true;
    } else {
      return false;
    }
  }

  static objCalled() {
    return Student.callFunc;
  }
}

let vishesh = new Student("Vishesh", 22, 1234567890, 45);
let dev = new Student("Dev", 32, 1234567890, 49);

console.log(Student.objCalled());
