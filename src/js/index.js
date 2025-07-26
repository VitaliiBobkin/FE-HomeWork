'use strict';

function Student(firstName, lastName, birthYear, grades = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.grades = grades;
  this.attendance = new Array(25).fill(null);
  this.attendanceIndex = 0;
}

// get the age
Student.prototype.getAge = function () {
  const currentYear = new Date().getFullYear();
  return currentYear - this.birthYear;
};

//calculate the average grade
Student.prototype.getAverageGrade = function () {
  if (this.grades.length === 0) return 0;
  const sum = this.grades.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  return sum / this.grades.length;
};

// mark presence
Student.prototype.present = function () {
  if (this.attendanceIndex < 25) {
    this.attendance[this.attendanceIndex++] = true;
  } else {
    console.log("All 25 classes have already been recorded.");
  }
};

//  mark absence
Student.prototype.absent = function () {
  if (this.attendanceIndex < 25) {
    this.attendance[this.attendanceIndex++] = false;
  } else {
    console.log("All 25 classes have already been recorded.");
  }
};

// calculate average attendance
Student.prototype.getAverageAttendance = function () {
  const valid = this.attendance.filter(value => value !== null);
  if (valid.length === 0) return 0;
  const presentCount = valid.filter(value => value).length;
  return presentCount / valid.length;
};

// summarize performance
Student.prototype.summary = function () {
  const avgGrade = this.getAverageGrade();
  const avgAttendance = this.getAverageAttendance();

  if (avgGrade >= 90 && avgAttendance >= 0.9) {
    return "Excellent!";
  } else if (avgGrade >= 90 || avgAttendance >= 0.9) {
    return "Good, you can better";
  } else {
    return "Radish";
  }
};

const student1 = new Student("Vasya", "Vetrov", 2003, [100, 95, 99, 98]);
for (let i = 0; i < 23; i++) student1.present();
for (let i = 0; i < 2; i++) student1.absent();

const student2 = new Student("Petya", "Ivanchenko", 2002, [92, 91, 94]);
for (let i = 0; i < 10; i++) student2.present();
for (let i = 0; i < 15; i++) student2.absent();

const student3 = new Student("Olena", "Polyakova", 2001, [75, 80, 78]);
for (let i = 0; i < 8; i++) student3.present();
for (let i = 0; i < 17; i++) student3.absent();

console.log(`${student1.firstName} ${student1.lastName} (age: ${student1.getAge()}):`, student1.summary());
console.log(`${student2.firstName} ${student2.lastName} (age: ${student2.getAge()}):`, student2.summary());
console.log(`${student3.firstName} ${student3.lastName} (age: ${student3.getAge()}):`, student3.summary());

