console.log('its connected!');
/* variables */

var input, op, result, firstNum;
var displayEl = document.getElementById('display');


/* event listeners */
document.querySelector('table')
  .addEventListener('click', handleClick);



/* functions */

function initialize() {
 input = '';
 op = result = firstNum = null; //since all variables will originally stay as null its okay to put it this way//
}

function updateDisplay() {
  if (result) {
    displayEl.textContent = input ? input : '0';
    initialize();

  } else {
    displayEl.textContent = input ? input : '0';

  }
}

function handleClick(evt) {
  if (evt.target.id === 'display') return;
  var text = evt.target.textContent;
  switch (text) { //if value within parens evaluates case's//
    case 'AC':
      initialize();
      updateDisplay();

      break;
    case 'C':
      input = '';

      break;
    case '±':
      input = input.includes('-') ? '' : '-' + input;

      break;
    case '÷':
     setOp(div)
      break;
    case '×':
     setOp(mult)
      break;
    case '−':
     setOp(sub)
      break;
    case '+':
      setOp(add);//function add gets pulled from operator functions//

      break;
    case '=':
      if (firstNum && op && input) {
        result = op(firstNum, parseFloat(input));
        input = '';
      }
      break;
    case '.':
      input += input.includes('.') ? '' : '.';
      break;
    default:
      input += text;


      break;
  }
  updateDisplay();
}

function setOp(openFunc){
  if (!input) return;
  firstNum = parseFloat(input);
  op = opFunc;
  input = '';
}



initialize();

/* operator functions */

function add(a, b) { //n1 or n2 would be general practice naming for variables for numbers
  return a + b;
}
function add(a, b) {
  return a - b;
}
function add(a, b) {
  return a * b;
}
function add(a, b) {
  return a / b;
}








