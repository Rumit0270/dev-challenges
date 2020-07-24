import React from 'react';

import './ActiveTodos.css';
import { Todo } from '../../../utils/todos';
import TodoComponent from '../../common/Todo/Todo';

interface ActiveTodosProps {
  todos: Todo[];
  onCheck: (id: number, isCompleted: boolean) => void;
}

const ActiveTodos: React.FC<ActiveTodosProps> = ({ todos, onCheck }) => {
  const renderTodos = () => {
    return todos.map((todo) => (
      <TodoComponent todo={todo} key={todo.id} onCheck={onCheck} />
    ));
  };
  return <>{renderTodos()}</>;
};

export default ActiveTodos;
