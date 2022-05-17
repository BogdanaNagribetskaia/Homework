const todoBtn = document.getElementById('js-todo-btn');
const todoList = document.getElementById('js-todo-list');

const createNewTodoItem = () => {
  const inputValue = document.getElementById('js-todo-input').value;

  if (inputValue) {
    if (inputValue.length >= 5) {
      // Создание нового ли
      const li = document.createElement('li');
      // Добавление класса
      li.classList.add('todo__item');
      // Запись текста из инпута
      li.innerText = inputValue;

      // Прослушка, удаление по клику из дом структуры
      li.addEventListener('click', () => {
        li.remove();
      });
      // Добавление в список кокретного ли
      todoList.appendChild(li);
      // Присвоение пустой строки
      document.getElementById('js-todo-input').value = '';
    } else {
      alert('Введите минумум 5 символов');
    }
  } else {
    alert('Введите что-то в поле ввода');
  }
};

todoBtn.addEventListener('click', createNewTodoItem);
export { todo };
