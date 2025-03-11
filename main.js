// function readInput(element) {
//     return document.getElementById(element).value;
// }
// function log(element) {
//     console.log(readInput(element))
// }

// let number1 = parseFloat(document.getElementById('number1').value);
// let number2 = parseFloat(document.getElementById('number2').value);
// let calc = document.getElementById('calc');
// let output = document.getElementById('output');
//
// calc.addEventListener('click', () => {
//     output.innerHTML = `Output: ${number1 + number2}`;
// })

function readInput(element) {
    return document.getElementById(element).value;
}

function calc(element, value1, value2) {
    let number1 = parseFloat(readInput(value1));
    let number2 = parseFloat(readInput(value2));
    // document.getElementById(element).innerHTML = (number1 + number2).toFixed(2);
    document.getElementById(element).innerHTML = (number1 + number2).toString();
}
g
