var theTable = document.querySelector("#theTable")
const formName = document.querySelector("#formName")
const formInfo = document.querySelector("#formInfo")
const submitButton = document.querySelector("#submitButton")
console.log(theTable)
console.log(formName)


submitButton.addEventListener
("click", e => {
  theTable.innerHTML += `<tr><td>${formName.value}</td><td>${formInfo.value}</td></tr>`
})