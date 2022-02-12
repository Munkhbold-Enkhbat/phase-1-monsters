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
  fetch('http://localhost:3000/monsters')
  .then(res => res.json())
  .then(monsters => monsters.forEach(monster => renderOneMonster(monster)))
}

function renderOneMonster(monster) {
  const div = document.createElement('div')
  div.innerHTML = `
  <h2>${monster.name}</h2>
  <h4>${monster.age}</h4>
  <p>${monster.description}</p>`  
  document.querySelector('#monster-container').appendChild(div)
}