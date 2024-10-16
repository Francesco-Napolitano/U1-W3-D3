const form = document.getElementById('main-form')
form.addEventListener('submit', (ev) => {
  // in alternativa si può inserire una funzione esterna
  ev.preventDefault()
  const brand = document.getElementById('brand')
  const model = document.getElementById('model')
  const price = document.getElementById('price')
  console.log('INVIO DEL FORM')
  console.log(brand.value) //riporta in console il valore che io ho scritto nell'input
  console.log(model.value)
  console.log(price.value) // si può creare un oggetto con all'interno delle proprietà degli oggetti i valori che ho inserito nel form
  const h3 = document.createElement('h3')
  h3.innerText = 'Grazie! Registrazione avvenuta con successo'
  const main = document.getElementsByTagName('main')[0]
  main.appendChild(h3)
  //per azzerare dopo l'invio
  form.reset()
})
