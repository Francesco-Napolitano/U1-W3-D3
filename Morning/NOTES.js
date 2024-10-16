const firstButtonClick = function (ev) {
  console.log('bottone clickato', ev)
}

//oppure
const testFunction = (ev) => {
  console.log('Questa funzione è scritta separatamente:', ev)
} // e invece di scrivere la stessa cosa sempre scrivi la tua funzione subito
// e la richiami poi dopo MA SENZA LE ()

const buttonJs = document.createElement('button')
buttonJs.innerText = 'Cliccami'

// buttonJs.onclick = (ev) => {
//   console.log('CLICCATO SECONDO BUTTON', ev)
// }  SI PUò ANCHE USARE QUESTO MA IN QUESTO CASO NON E' RIUTILIZZABILE, al contrario di scrivere la funzione separatamente

buttonJs.onclick = testFunction

// secondDiv.appendChild(buttonJs)
// console.log(secondDiv)

const buttonJs2 = document.createElement('button')
const secondDiv = document.querySelectorAll('section div')[1]
secondDiv.appendChild(buttonJs2)
buttonJs2.innerText = 'Cliccami DAJE ROMA'
buttonJs2.addEventListener('click', testFunction) //invece di scrivere .ON prima delle proprietà, ma sono le stesse

const h1 = document.querySelector('h1')
h1.addEventListener('mouseover', () => {
  h1.style.color = 'red'
})
