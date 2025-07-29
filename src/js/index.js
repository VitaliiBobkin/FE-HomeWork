'use strict'

class Student {
  constructor(firstName, lastName, birthYear, grades = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades;
    this.attendance = new Array(25).fill(null);
    this.attendanceIndex = 0;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getAge() {
    return new Date().getFullYear() - this.birthYear;
  }

  getAverageGrade() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((a, b) => a + b, 0);
    return sum / this.grades.length;
  }

  present() {
    if (this.attendanceIndex < 25) {
      this.attendance[this.attendanceIndex++] = true;
    } else {
      console.warn(`${this.getFullName()}: All 25 attendance records are already filled.`);
    }
  }

  absent() {
    if (this.attendanceIndex < 25) {
      this.attendance[this.attendanceIndex++] = false;
    } else {
      console.warn(`${this.getFullName()}: All 25 attendance records are already filled.`);
    }
  }

  getAverageAttendance() {
    const valid = this.attendance.filter(v => v !== null);
    if (valid.length === 0) return 0;
    const attended = valid.filter(v => v).length;
    return attended / valid.length;
  }

  summary() {
    const avgGrade = this.getAverageGrade();
    const avgAttendance = this.getAverageAttendance();

    if (avgGrade >= 90 && avgAttendance >= 0.9) return "Excellent!";
    if (avgGrade >= 90 || avgAttendance >= 0.9) return "Good, but can be better.";
    return "Not good!";
  }
}

const student1 = new Student("Alex", "Ivanov", 2004, [95, 88, 92, 100]);
const student2 = new Student("Maryika", "Petrenko", 2003, [80, 75, 70]);
const student3 = new Student("Stepan", "Kovalenko", 2005, [98, 96, 97, 95]);

Array.from({ length: 20 }, (_, i) => {
  student1.present();
  i % 2 === 0 ? student2.present() : student2.absent();
  student3.absent();
});

console.log(`${student1.getFullName()}, Age: ${student1.getAge()}`, student1.summary());
console.log(`${student2.getFullName()}, Age: ${student2.getAge()}`, student2.summary());
console.log(`${student3.getFullName()}, Age: ${student3.getAge()}`, student3.summary());
