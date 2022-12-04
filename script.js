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
    } else if (operator == "\u00D7") {
        return multiply(a, b);
    } else if (operator == "\u00F7") {
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
let operators = document.getElementsByClassName("operator")
let equals = document.getElementsByClassName("equals")
let equals_button = equals[0]
let del = document.getElementsByClassName("delete")
let del_button = del[0] 
let clear = document.getElementsByClassName("clear")
let clear_button = clear[0]

function type_num(num) {
    if (typed_nums.textContent == "0") {
        typed_nums.textContent = num.textContent
    } else {
        if (typed_nums.textContent.length >= 22) {
            typed_nums.textContent = typed_nums.textContent
        } else {
            typed_nums.textContent += num.textContent
        }
    }
}

function type_decimal(btn) {
    if (typed_nums.textContent.includes(".")) {
        typed_nums.textContent += ""
    } else {
        if (typed_nums.textContent.length >= 22) {
            typed_nums.textContent = typed_nums.textContent
        } else {
            typed_nums.textContent += btn.textContent 
        }
    }
}

function delete_num() {
    if (typed_nums.textContent.length == 1) {
        typed_nums.textContent = "0"
    } else {
        typed_nums.textContent = typed_nums.textContent.slice(0, -1)
    }
}

function clear_calc() {
    expression.textContent = ""
    typed_nums.textContent = "0"
}

function calculate(btn) {
    if (expression.textContent == "") {
        expression.textContent += typed_nums.textContent += btn.textContent
        typed_nums.textContent = "0"
    } else {
        let arr = expression.textContent.split(" ")
        let arg_1 = arr[1]
        let arg_2 = Number(arr[0])
        let arg_3 = Number(typed_nums.textContent)
        if (arg_1 == "\u00F7" && arg_3 == 0) {
            alert("Bruh... xD (you can't divide by zero!)")
        } else {
            let result = operate(arg_1, arg_2, arg_3)
            if (result % 1 != 0) {
                result = Math.round((result + Number.EPSILON) * 100) / 100
            }
            expression.textContent = result.toString() + btn.textContent
            typed_nums.textContent = "0"
        }
    }
}

function equals_operation() {
    if (expression.textContent != "") {
        let arr = expression.textContent.split(" ")
        let arg_1 = arr[1]
        let arg_2 = Number(arr[0])
        let arg_3 = Number(typed_nums.textContent)
        if (arg_1 == "\u00F7" && arg_3 == 0) {
            alert("Bruh... xD (you can't divide by zero!)")
        } else {
            let result = operate(arg_1, arg_2, arg_3)
            if (result % 1 != 0) {
                result = Math.round((result + Number.EPSILON) * 100) / 100 
            }
            expression.textContent = ""
            typed_nums.textContent = result.toString()
        }
    }
}

function keyboard(e) {
    switch(e.key){
        case "0":
            type_num(numbers[9])
            break
        case "1":
            type_num(numbers[6])
            break
        case "2":
            type_num(numbers[7])
            break
        case "3":
            type_num(numbers[8])
            break
        case "4":
            type_num(numbers[3])
            break
        case "5":
            type_num(numbers[4])
            break
        case "6":
            type_num(numbers[5])
            break
        case "7":
            type_num(numbers[0])
            break
        case "8":
            type_num(numbers[1])
            break
        case "9":
            type_num(numbers[2])
            break
        case "+":
            calculate(operators[3])
            break
        case "-":
            calculate(operators[2])
            break
        case "*":
        case "x":
            calculate(operators[1])
            break
        case "/":
            calculate(operators[0])
            break
        case ".":
            type_decimal(decimal_button)
            break
        case "Enter":
        case "=":
            equals_operation()
            break
        case "Backspace":
            delete_num()
            break
        case "Escape":
            clear_calc()
            break
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

del_button.addEventListener("click", delete_num)
clear_button.addEventListener("click", clear_calc)

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function(){
        calculate(operators[i])
    })
}

equals_button.addEventListener("click", equals_operation)
document.addEventListener("keydown", keyboard)
