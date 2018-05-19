let numOutput = '';
var numInput = document.querySelector('.outputDisplay > h4');
const button0 = document.getElementById('zero');
const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');
const button4 = document.getElementById('btn4');
const button5 = document.getElementById('btn5');
const button6 = document.getElementById('btn6');
const button7 = document.getElementById('btn7');
const button8 = document.getElementById('btn8');
const button9 = document.getElementById('btn9');
const btnClear = document.getElementById('clear');
const buttonEqual = document.getElementById('btnEqual');
const buttonAdd = document.getElementById('btnAdd');
const buttonSub = document.getElementById('btnSub');
const buttonMul = document.getElementById('btnMul');
const buttonDiv = document.getElementById('btnDiv');
var mainArray = [];
var oprArray = [];
var input = 0;
const maxDisplayLength = 10;

function addDisplay(value) {
	numInput.innerHTML = value;
	input = numOutput += value;
	numInput.innerHTML = input;
}
function clearAll(){
	numInput.innerHTML = 0;
	numOutput = '';
	mainArray = [];
	oprArray = [];
}
function equateAll(){
	mainArray.splice(mainArray.length, 0, parseInt(input));
	operate();
	input = 0;
	numOutput = '';
}
function operate(){	
	let opr = 0;
	while (opr <= maxDisplayLength){
		if (oprArray[0] == '1') {
			var sum = mainArray[0] + mainArray[1];
			mainArray.splice(0,(mainArray[0], mainArray[1]), sum);
			oprArray.splice(0, oprArray[0]);
			numInput.innerHTML = mainArray[0];
		}
		if (oprArray[0] == '2') {
			var difference = mainArray[0] - mainArray[1];
			mainArray.splice(0,(mainArray[0], mainArray[1]), difference);
			oprArray.splice(0, oprArray[0]);
			numInput.innerHTML = mainArray[0];
		}
		if (oprArray[0] == '3') {
			var product = mainArray[0] * mainArray[1];
			mainArray.splice(0,(mainArray[0], mainArray[1]), product);
			oprArray.splice(0, oprArray[0]);
			numInput.innerHTML = mainArray[0];
		}
		if (oprArray[0] == '4') {
			var quotient= mainArray[0] / mainArray[1];
			mainArray.splice(0,(mainArray[0], mainArray[1]), quotient);
			oprArray.splice(0, oprArray[0]);
			numInput.innerHTML = mainArray[0];
		}  
		// else { numInput.innerHTML = 'Math Error'}
		opr++
	}
		 input = 0;
		 numOutput = '';
}
function reset(){
	if (mainArray.length >= 2) {
		operate();
	}
	if (mainArray.length < 1){
	mainArray.splice(mainArray.length, 0, parseInt(input));
	}
	input = 0;
	numOutput = '';
}

function keyPress(){
	button0.addEventListener('click', function() {addDisplay('0')})
	button1.addEventListener('click', function() {addDisplay('1')})
	button2.addEventListener('click', function() {addDisplay('2')})
	button3.addEventListener('click', function() {addDisplay('3')})
	button4.addEventListener('click', function() {addDisplay('4')})
	button5.addEventListener('click', function() {addDisplay('5')})
	button6.addEventListener('click', function() {addDisplay('6')})
	button7.addEventListener('click', function() {addDisplay('7')})
	button8.addEventListener('click', function() {addDisplay('8')})
	button9.addEventListener('click', function() {addDisplay('9')})
	btnClear.addEventListener('click', function() {clearAll()})
	buttonEqual.addEventListener('click', function() {equateAll()})
	
	buttonAdd.addEventListener('click', function() {
		// addDisplay(' + ')
		// numInput.innerHTML = '+';
		oprArray.splice(oprArray.length, 0, '1');
		reset()

	})
	buttonSub.addEventListener('click', function() {
		// addDisplay(' - ')
		// numInput.innerHTML = '-';
		oprArray.splice(oprArray.length, 0, '2');
		reset()
	})
	buttonMul.addEventListener('click', function() {
		// addDisplay(' * ')
		// numInput.innerHTML = '*';
		oprArray.splice(oprArray.length, 0, '3');
		reset()
	})
	buttonDiv.addEventListener('click', function() {
		// addDisplay(' / ')
		// numInput.innerHTML = '/';
		oprArray.splice(oprArray.length, 0, '4');
		reset()
	})
}

keyPress();

