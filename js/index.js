document.addEventListener('DOMContentLoaded', () => {
  createMonsterElements()
  getAllMonsters()
})

function createMonsterElements() {
  const newName = document.createElement('input')
  newName.id = 'newName'
  newName.placeholder = 'name...'

  const newAge = document.createElement('input')
  newAge.id = 'newId'
  newAge.placeholder = 'age...'

  const newDescription = document.createElement('input')
  newDescription.id = 'newDescription'
  newDescription.placeholder = 'description...'

  const button = document.createElement('button')
  button.innerText = 'Create'

  document.querySelector('#create-monster').append(newName, newAge, newDescription, button)
}

function getAllMonsters() {
  let limit = 50
  let page = 1
  getData(limit, page)
  displayMonsters(limit, page)
}

function renderOneMonster(monster) {
  const div = document.createElement('div')
  div.innerHTML = `
  <h2>${monster.name}</h2>
  <h4>${monster.age}</h4>
  <p>${monster.description}</p>`  
  document.querySelector('#monster-container').appendChild(div)
}

function displayMonsters(limit, page) {
  const forward = document.querySelector('#forward')
  const backward = document.querySelector('#back')
  
  backward.addEventListener('click', () => {
    if(page > 1) {
      page -= 1
      getData(limit, page)  
    }
  })

  forward.addEventListener('click', () => {
    if(page < 21) {
      page += 1
      getData(limit, page)
    }
  })
}

function getData(num1, num2) {
  document.querySelector('#monster-container').innerText = ''
  fetch(`http://localhost:3000/monsters/?_limit=${num1}&_page=${num2}`)
  .then(res => res.json())
  .then(monsters => monsters.forEach(monster => {
    renderOneMonster(monster)
  }))
}