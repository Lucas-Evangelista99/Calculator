function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(operator, a, b) {
    if (operator == "+") {
        return add(a, b);
    } else if (operator == "-") {
        return subtract(a, b);
    } else if (operator == "*") {
        return multiply(a, b);
    } else if (operator == "/") {
        return divide(a, b);
    }
}

let div1 = document.getElementsByClassName("typed");
let div2 = document.getElementsByClassName("expression")
let typed_nums = div1[0]
let expression = div2[0]
let numbers = document.getElementsByClassName("number")
let decimal = document.getElementsByClassName("decimal")
let decimal_button = decimal[0]

function type_num(num) {
    if (typed_nums.textContent == "0") {
        typed_nums.textContent = num.textContent
    } else {
        typed_nums.textContent += num.textContent
    }
}

function type_decimal(elem) {
    if (typed_nums.textContent.includes(".")) {
        elem.disabled = true
    } else {
        elem.disabled = false
        typed_nums.textContent += elem.textContent
    }
}

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function(){
        type_num(numbers[i])
    })
}

decimal_button.addEventListener("click", function(){
    type_decimal(decimal_button)
})