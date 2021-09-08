/*
TODO:
    Limit number input
    Disallow . from being entered multiple times
    Clean up structure
*/

class Calc {
  "use strict";

  // Shortcut to get elements
  static el = function (element) {
    if (element.charAt(0) === "#") { // If passed an ID...
      return document.querySelector(element); // ... returns single element
    }

    return document.querySelectorAll(element); // Otherwise, returns a nodelist
  }

  constructor() {
    this.viewer = element.el("#viewer"), // Calculator screen where result is displayed
      this.equals = element.el("#equals"), // Equal button
      this.nums = element.el(".num"), // List of numbers
      this.ops = element.el(".ops"), // List of operators
      this.theNum = "", // Current number
      this.oldNum = "", // First number
      this.resultNum, // Result
      this.operator; // Batman


      for (let i = 0, l = nums.length; i < l; i++) {
        nums[i].onclick = setNum;
      }
  
      // Add click event to operators
      for (var i = 0, l = ops.length; i < l; i++) {
        ops[i].onclick = moveNum;
      }
  
      // Add click event to equal sign
      equals.onclick = displayNum;
  
      // Add click event to clear button
      el("#clear").onclick = clearAll;
  
      // Add click event to reset button
      el("#reset").onclick = function () {
        window.location = window.location;
      }

  }



  // When: Number is clicked. Get the current number selected
  setNum = function () {
    if (this.resultNum) { // If a result was displayed, reset number
      this.theNum = this.getAttribute("data-num");
      this.resultNum = "";
    } else { // Otherwise, add digit to previous number (this is a string!)
      this.theNum += this.getAttribute("data-num");
    }

    viewer.innerHTML = this.theNum; // Display current number

  }

  // When: Operator is clicked. Pass number to oldNum and save operator
  moveNum = function () {
    this.oldNum = theNum;
    this.theNum = "";
    this.operator = this.getAttribute("data-ops");

    equals.setAttribute("data-result", ""); // Reset result in attr
  };

  // When: Equals is clicked. Calculate result
  displayNum = function () {

    // Convert string input to numbers
    oldNum = parseFloat(oldNum);
    theNum = parseFloat(theNum);

    // Perform operation
    switch (operator) {
      case "plus":
        resultNum = oldNum + theNum;
        break;

      case "minus":
        resultNum = oldNum - theNum;
        break;

      case "times":
        resultNum = oldNum * theNum;
        break;

      case "divided by":
        resultNum = oldNum / theNum;
        break;

        // If equal is pressed without an operator, keep number and continue
      default:
        resultNum = theNum;
    }

    // If NaN or Infinity returned
    if (!isFinite(resultNum)) {
      if (isNaN(resultNum)) { // If result is not a number; set off by, eg, double-clicking operators
        resultNum = "You broke it!";
      } else { // If result is infinity, set off by dividing by zero
        resultNum = "Look at what you've done";
        el('#calculator').classList.add("broken"); // Break calculator
        el('#reset').classList.add("show"); // And show reset button
      }
    }

    // Display result, finally!
    viewer.innerHTML = resultNum;
    equals.setAttribute("data-result", resultNum);

    // Now reset oldNum & keep result
    oldNum = 0;
    theNum = resultNum;

  }

  // When: Clear button is pressed. Clear everything
  clearAll = function () {
    this.oldNum = "";
    this.theNum = "";
    this.viewer.innerHTML = "0";
    this.equals.setAttribute("data-result", resultNum);
  }

  /* The click events */

  // Add click event to numbers

  
  
}

let a = new Calc();