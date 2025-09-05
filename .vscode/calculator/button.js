const number1 = Number(document.getElementById("firstNumber").value)
const number2 = Number(document.getElementById("secondNumber").value)

const option1 = document.getElementById("add")
const option2 = document.getElementById("minus")
const option3 = document.getElementById("multiply")
const option4 = document.getElementById("divide")

const buttonElCal = document.getElementById("calculate")
const buttonElRes = document.getElementById("reset")
const resultEl = document.getElementById("result")

const myForm = document.getElementById("myForm")

myForm.addEventListener("submit", (event) =>{
    event.preventDefault()

    if(option1.value){
        let result = number1 + number2
    }else if(option2){
        result = number1 - number2
    }else if(option3.value){
        result = number1 * number2
    }else if(option4){
        result = number1 / number2
    }
})