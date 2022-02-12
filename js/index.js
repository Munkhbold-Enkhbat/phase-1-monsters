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
  const h2 = document.createElement('h2')
  h2.innerText = monster.name
  const h4 = document.createElement('h4')
  h4.innerText = monster.age
  const p = document.createElement('p')
  p.innerText = monster.description
  div.append(h2, h4, p)

  document.querySelector('#monster-container').appendChild(div)
}