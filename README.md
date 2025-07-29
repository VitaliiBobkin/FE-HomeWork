# FE-HomeWork

## Home_Work_41
## Tasks Overview

## Create Student.

### Need to make a constructor for the entity "Student".

* * A student has a first name, last name, year of birth - these are properties. There is an array with grades, this is also a property. And there is an opportunity to get the student's age and his average grade - these are methods.

* * All Students also have an array of the same length, it has 25 elements, initially it is not filled, but for 25 elements. This is an array in which attendance is noted, every time we call the .present() method on the next empty place, true is written to the array, when we call .absent() - false is written. Provide any protection against the fact that there cannot be more than 25 records in the attendance array. The array is a property, present and absent are methods.

* * The last method: .summary(), checks the average grade and average attendance (number of Visits/number of Classes), and if the average grade is greater than 90 and the average attendance is greater than 0.9, then the summary method returns the string "Well done!", if one of these values is less, then - "Good, but you can do better", if both are lower - "Radish!".

* * Don't forget to create 2-3 instances (of specific students) after you write this constructor and show the use of these methods.
