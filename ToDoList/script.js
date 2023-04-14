//Validate input isn't empty
document.querySelector('#push').onclick = function () {
  if(document.querySelector('#newTask input').value.length == 0){
    alert('Please Enter a Task');
  }
  else{
    document.querySelector('#tasks').innerHTML += 
    `
      <div class="task">
        <span id="taskname">
          ${document.querySelector('#newTask input').value}
        </span>
        <button class="deleteTask">
          Delete
        </button>
      </div>
    `
  }
}