let todos = []
let updatedArray = []
const createTodo = () => {

  const textFromTitle = document.getElementById('title').value
  const textFromDescription = document.getElementById('description').value

  if (textFromTitle.length === 0 || textFromDescription.length === 0) {
    alert('please fill in the title and description')
    return
  }

  const ul = document.createElement('ul')
  const holder = document.createElement('div')
  const titleTag = document.createElement('li')
  const deleteButton = document.createElement('button')
  const descriptionTag = document.createElement('li')

  const cardTitleText = document.createTextNode(textFromTitle)
  const cardDescriptionText = document.createTextNode(textFromDescription)

  const container = document.getElementById('container')

  holder.className = 'card'
  titleTag.className = 'title'
  deleteButton.className = 'deleteButton'
  descriptionTag.className = 'description'

  ul.appendChild(titleTag)
  ul.appendChild(descriptionTag)
  holder.appendChild(ul)
  holder.appendChild(deleteButton)
  titleTag.appendChild(cardTitleText)
  container.appendChild(holder);
  descriptionTag.appendChild(cardDescriptionText)

  todos.push(holder)

  todos.forEach(todo => {
    if (todo.className !== 'cardDone') {
      todo.addEventListener('click', function () {
        todo.className = 'cardDone'
      })
    }
  })

  deleteButton.addEventListener('click', function () {
    deleteButton.className = 'delete'
    deleteButton.parentNode.remove()
    updatedArray = todos.filter(todo => todo.children[1].className !== 'delete')
    todos = updatedArray
  })
}
