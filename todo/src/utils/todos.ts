export interface Todo {
  title: number;
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

export const getCompletedTodos = (): Todo[] => {
  let todos: Todo[] = [];

  const todosValue = localStorage.getItem('todos');
  if (todosValue) {
    todos = JSON.parse(todosValue);
  }

  return todos.filter((todo) => todo.isCompleted);
};

export const getActiveTodos = (): Todo[] => {
  let todos: Todo[] = [];

  const todosValue = localStorage.getItem('todos');
  if (todosValue) {
    todos = JSON.parse(todosValue);
  }

  return todos.filter((todo) => !todo.isCompleted);
};
