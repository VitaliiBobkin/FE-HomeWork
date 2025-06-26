'use strict'

function variableScopeVisibility() {
  for (let i = 0; i < 1; i++) {
    var varVariable = "Variable var";
    let letVariable = "Variable let";
    const constVariable = "Variable const";

    // Inside loop, all variables are accessible scope of visibility
    console.log("varVariable:", varVariable);
    console.log("letVariable:", letVariable);
    console.log("constVariable:", constVariable);
  }

  /*
    Outside loop
    var is hoisted and initialized with undefined, so it's accessible,
    and Temporal Dead Zone doesn't work for it
  */
  console.log("varVariable: ", varVariable);

 /*
      let and const are hoisted too, but they remain in the Temporal Dead Zone
      until their actual declaration line is executed.
  */
  console.log("letVariable: ", letVariable);
  console.log("constVariable: ", constVariable);
}

variableScopeVisibility();
