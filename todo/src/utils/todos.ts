export interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

export const saveTodo = (todo: Todo) => {
  let todos: Todo[] = [];

  const todosValue = localStorage.getItem('todos');
  if (todosValue) {
    todos = JSON.parse(todosValue);
  }

  todos.push(todo);

  localStorage.setItem('todos', JSON.stringify(todos));
};

export const getAllTodos = (): Todo[] => {
  let todos: Todo[] = [];

  const todosValue = localStorage.getItem('todos');
  if (todosValue) {
    todos = JSON.parse(todosValue);
  }

  return todos;
};

export const deleteTodo = (todoId: number) => {
  let todos: Todo[] = [];

  const todosValue = localStorage.getItem('todos');
  if (todosValue) {
    todos = JSON.parse(todosValue);
  }

  todos = todos.filter((savedTodo) => savedTodo.id !== todoId);

  localStorage.setItem('todos', JSON.stringify(todos));
};

export const deleteAllTodos = () => {
  localStorage.removeItem('todos');
};

export const checkTodo = (id: number, isCompleted: boolean) => {
  let todos: Todo[] = [];

  const todosValue = localStorage.getItem('todos');
  if (todosValue) {
    todos = JSON.parse(todosValue);
  }

  let todo = todos.find((item) => item.id === id);
  if (todo) {
    todo.isCompleted = isCompleted;
  }

  localStorage.setItem('todos', JSON.stringify(todos));
};
