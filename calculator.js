//General button functionality
function pressed(button) {
    var expression = document.getElementById("scrn").value;

    if (button == "C") {
      document.getElementById("scrn").value = "";
    } else if (button == "del") {
      document.getElementById("scrn").value = expression.slice(0, -1);
    } else {
      document.getElementById("scrn").value += button;
    }
  }

/*Extracts digits from the expression shown on the calculator screen,
 removes the special characters and stores the digits into a list that 
 can be traversed better than a string*/   
  function split_up(input_) {
    return input_.split(/[-+*/()]/);
  }

// Evaluation function used for expressions within a set of parentheses
function calc(expression) {
    return eval(expression);
  }

// Square root function
  function root() {
    var expression = document.getElementById("scrn").value;
    var last_elem = "";
    let index = expression.indexOf("(");
    var temp = "";

    // Evaluates an expression within parentheses and removes the
    //parentheses
    if (index !== -1) {
      last_elem = calc(expression.slice(index + 1, -1));
      temp = expression.slice(0, index);
    } else {
      var nums = split_up(expression);
      last_elem = nums[nums.length - 1];
      temp = expression.slice(0, -last_elem.length);
    }

    var num = Math.sqrt(last_elem);

    if (isNaN(num)) {
      pressed("C");
      pressed("ERROR");
    } else {
      document.getElementById("scrn").value = temp;
      document.getElementById("scrn").value += num;
    }
  }

// Percentage function
  function percent() {
    var expression = document.getElementById("scrn").value;
    var last_elem = "";
    let index = expression.indexOf("(");

     // Evaluates an expression within parentheses and removes the
    //parentheses
    if (index !== -1) {
      last_elem = calc(expression.slice(index + 1, -1));
      document.getElementById("scrn").value = expression.slice(0, index);
    } else {
      var nums = split_up(expression);
      last_elem = nums[nums.length - 1];
      document.getElementById("scrn").value = expression.slice(
        0,
        -last_elem.length
      );
    }
    var num = last_elem / 100;
    document.getElementById("scrn").value += num;
  }

// Square functionality
  function square() {
    var expression = document.getElementById("scrn").value;
    var last_elem = "";
    let index = expression.indexOf("(");

    // Evaluates an expression within parentheses and removes the
    //parentheses
    if (index !== -1) {
      last_elem = calc(expression.slice(index + 1, -1));
      document.getElementById("scrn").value = expression.slice(0, index);
    } else {
      var nums = split_up(expression);
      last_elem = nums[nums.length - 1];
      document.getElementById("scrn").value = expression.slice(
        0,
        -last_elem.length
      );
    }

    var num = last_elem * last_elem;
    document.getElementById("scrn").value += num;
  }
//   Evaluation function
  function calculate() {
    var expression = document.getElementById("scrn").value;
    var answer = eval(expression);

    if (answer == Infinity || isNaN(answer)) {
      pressed("C");
      pressed("ERROR");
    } else {
      document.getElementById("scrn").value = answer;
    }
  }

//Decimal point functionality   
  function dec_point() {
    var nums = split_up(document.getElementById("scrn").value);
    var last_elem = nums[nums.length - 1];

    if (last_elem.includes(".") == false) {
      pressed(".");
    }
  }
