class Calculator {
  #theNum;
  #oldNum;
  static el(element) {
    if (element.charAt(0) === "#") { // If passed an ID...
      return document.querySelector(element); // ... returns single element
    }

    return document.querySelectorAll(element);
  }

  constructor() {

    this.viewer = Calculator.el("#viewer"); // Calculator screen where result is displayed
    this.equals = Calculator.el("#equals"); // Equal button
    this.nums = Calculator.el(".num"); // List of numbers
    this.ops = Calculator.el(".ops"); // List of this.operators
    this.#theNum = ""; // Current number
    this.#oldNum = ""; // First number
    this.resultNum; // Result
    this.operator; // Batman
    ; // Add click event to numbers
    for (let i = 0, l = this.nums.length; i < l; i++) {
      this.nums[i].onclick = this.setNum.bind(this);
    }

    // Add click event to this.operators
    for (let i = 0, l = this.ops.length; i < l; i++) {
      this.ops[i].onclick = this.moveNum.bind(this);
    }

    // Add click event to equal sign
    this.equals.onclick = this.displayNum.bind(this);

    // Add click event to clear button
    Calculator.el("#clear").onclick = this.clearAll.bind(this);

    // Add click event to reset button
    Calculator.el("#reset").onclick = function () {
      window.location = window.location;
    };
  }


  setNum(e) {
    if (this.resultNum) { // If a result was displayed, reset number
      this.#theNum = e.target.getAttribute("data-num");
      this.resultNum = "";
    } else { // Otherwise, add digit to previous number (this is a string!)
      this.#theNum += e.target.getAttribute("data-num");
    }

    this.viewer.innerHTML = this.#theNum; // Display current number

  }

  moveNum(e) {
    this.#oldNum = this.#theNum;
    this.#theNum = "";
    this.operator = e.target.getAttribute("data-ops");

    equals.setAttribute("data-result", ""); // Reset result in attr
  }

  clearAll() {
    this.#oldNum = "";
    this.#theNum = "";
    this.viewer.innerHTML = "0";
    this.equals.setAttribute("data-result", this.resultNum);
  };

  displayNum() {

    // Convert string input to numbers
    this.#oldNum = parseFloat(this.#oldNum);
    this.#theNum = parseFloat(this.#theNum);

    // Perform operation
    switch (this.operator) {
      case "plus":
        this.resultNum = this.#oldNum + this.#theNum;
        break;

      case "minus":
        this.resultNum = this.#oldNum - this.#theNum;
        break;

      case "times":
        this.resultNum = this.#oldNum * this.#theNum;
        break;

      case "divided by":
        this.resultNum = this.#oldNum / this.#theNum;
        break;

        // If equal is pressed without an this.operator, keep number and continue
      default:
        this.resultNum = this.#theNum;
    }

    // If NaN or Infinity returned
    if (!isFinite(this.resultNum)) {
      if (isNaN(this.resultNum)) { // If result is not a number; set off by, eg, double-clicking this.operators
        this.resultNum = "You broke it!";
      } else { // If result is infinity, set off by dividing by zero
        this.resultNum = "Look at what you've done";
        Calculator.el('#calculator').classList.add("broken"); // Break calculator
        Calculator.el('#reset').classList.add("show"); // And show reset button
      }
    }

    // Display result, finally!
    this.viewer.innerHTML = this.resultNum;
    this.equals.setAttribute("data-result", this.resultNum);

    // Now reset this.#oldNum & keep result
    this.#oldNum = 0;
    this.#theNum = this.resultNum;

  }
}


const myCalc = new Calculator();