var input1    = document.getElementById('input1'),
    input2    = document.getElementById('input2'),
    operator  = document.getElementById('sign'),
    output    = document.getElementById('output'),
    values    = document.querySelectorAll('.values'),
    sign      = document.querySelectorAll('.operators'),
    clear     = document.getElementById('clear'),
    result    = document.getElementById('result');

let currentInput = input1;

// Function For Input  Value
values.forEach((button =>{
  button.addEventListener("click",()=>{
    currentInput.value += button.textContent;
  });
}));

// Function For Sign Operator
sign.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentInput === input1) {
      if (input1.value !== "") {
        operator.value = button.textContent;
        currentInput = input2;
      }
    } else if (currentInput === input2) {
      operator.value = button.textContent;
      currentInput = input1;
    }
  });
});

// Function For Clear All Button
clear.addEventListener("click",() =>{
  input1.value        = "";
  input2.value        = "";
  operator.value      = "";
  output.textContent  = "";
  currentInput        = input1;
});

// Function For Equals to or Result Button
result.addEventListener("click", () =>{
  var num1        = parseFloat(input1.value);
  var num2        = parseFloat(input2.value);
  var operation   = operator.value;

  if (isNaN(num1)|| isNaN(num2)) {
    output.textContent = "Invalid Input";
  } else {
    let result;
      switch (operation) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "×":
          result = num1 * num2;
          break;
        case "÷":
          result = num1 / num2;
          break;
      
        default:
          output.textContent = "Invalid Output"
          break;
      }
      output.textContent = result;
  }

});