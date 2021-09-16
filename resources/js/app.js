import '../css/app.css'


const tasks = document.querySelectorAll('.task')
const dropzones = document.querySelectorAll('.tasks-column')


tasks.forEach(task => {
  task.addEventListener('dragstart', dragstart)
  task.addEventListener('drag', drag)
  task.addEventListener('dragend', dragend)
})

function dragstart() {
  dropzones.forEach(dropzone => dropzone.classList.add('column-highlight'))

  this.classList.add('isDragging')
}

function drag() {
  
}

function dragend() {
  dropzones.forEach(dropzone => dropzone.classList.remove('column-highlight'))

  this.classList.remove('isDragging')
}


dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragenter', dragenter)
  dropzone.addEventListener('dragover', dragover)
  dropzone.addEventListener('dragleave', dragleave)
  dropzone.addEventListener('drop', drop)
})

function dragenter() {

}

function dragover() {
  this.classList.add('draggingOver')

  //get dragging task
  const taskBeingDragged = document.querySelector('.isDragging')

  // set task as child into dropzone
  this.appendChild(taskBeingDragged)
}

function dragleave() {
  this.classList.remove('draggingOver')
}

function drop() {
  this.classList.remove('draggingOver')
}