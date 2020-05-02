//define UI vars
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')


loadEventListeners()

//add event listener & call addTask function
function loadEventListeners() {
  form.addEventListener('submit', addTask)

  taskList.addEventListener("click", removeTask)
    
}


//add task to list of tasks
function addTask(e) {
  e.preventDefault()
  if(taskInput.value === '') {
    alert('Add a task')
  }
  
  const li = document.createElement('li')  
  li.className = 'collection-item'  
  li.appendChild(document.createTextNode(taskInput.value))  
  const link = document.createElement('a')
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></li>'  
  li.appendChild(link)
  taskList.appendChild(li)

  //clear input
  taskInput.value = ''   
}

function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('are you sure?')) {
      e.target.parentElement.parentElement.remove()
    }
  }
}




