const minus = document.querySelector("#minus")
const plus = document.querySelector("#plus")
const reset = document.querySelector("#reverse")
const counterEl = document.querySelector("#Counter")

let counter = 0

counterEl.innerHTML = counter

minus.addEventListener("click",(event) =>{
    event.preventDefault()
    counter--;
    counterEl.innerHTML = counter

})

reset.addEventListener("click", (event) =>{
    event.preventDefault()
    counter = 0;
    counterEl.innerHTML = counter

})

plus.addEventListener("click",(event) =>{
    event.preventDefault()
    counter++;
    counterEl.innerHTML = counter
})

