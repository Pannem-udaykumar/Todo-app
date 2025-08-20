document.getElementById('add-btn').addEventListener('click', addTodo);

function addTodo() {
  const input = document.getElementById('todo-input');
  const task = input.value.trim();

  if (task === '') {
    alert('Please enter a task.');
    return;
  }

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = task;
  span.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.className = 'delete';
  delBtn.addEventListener('click', () => {
    li.remove();
  });

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.className = 'edit';
  editBtn.addEventListener('click', () => {
    
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = span.textContent;
    li.insertBefore(editInput, span);
    li.removeChild(span);

   
    editBtn.textContent = 'Save';

   
    editBtn.onclick = () => {
      const updatedTask = editInput.value.trim();
      if (updatedTask === '') {
        alert('Task cannot be empty.');
        return;
      }
      span.textContent = updatedTask;
      li.insertBefore(span, editInput);
      li.removeChild(editInput);
      editBtn.textContent = 'Edit';
      editBtn.onclick = arguments.callee; 
    };
  });

  li.appendChild(span);
  li.appendChild(editBtn); 
  li.appendChild(delBtn);

  document.getElementById('todo-list').appendChild(li);
  input.value = '';
}
