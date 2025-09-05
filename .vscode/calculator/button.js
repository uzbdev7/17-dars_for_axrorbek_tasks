const buttonElCal = document.getElementById("calculate")
const buttonElRes = document.getElementById("reset")
const resultEl = document.querySelector(".result")

const myForm = document.querySelector(".myForm")
resultEl.innerHTML = ""
myForm.addEventListener("submit", (event) =>{
    event.preventDefault()

const choise = document.getElementById("choice").value
const number1 = Number(document.getElementById("firstNumber").value)
const number2 = Number(document.getElementById("secondNumber").value)

    let result = 0
    if(choise == "+"){
        result = number1 + number2
    }else if(choise == "-"){
        result = number1 - number2
    }else if(choise == "*"){
        result = number1 * number2
    }else if(choise == "/"){
        result = number1 / number2
    }
    resultEl.innerHTML = `Result:${result}`
})

buttonElRes.addEventListener("click", () => {
   resultEl.innerHTML = ""
})


