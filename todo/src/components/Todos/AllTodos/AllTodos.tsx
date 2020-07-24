import React from 'react';

import './AllTodos.css';
import { Todo } from '../../../utils/todos';
import TodoComponent from '../../common/Todo/Todo';

interface AllTodosProps {
  todos: Todo[];
  onCheck: (id: number, isCompleted: boolean) => void;
}

const AllTodos: React.FC<AllTodosProps> = ({ todos, onCheck }) => {
  const renderTodos = () => {
    return todos.map((todo) => (
      <TodoComponent todo={todo} key={todo.id} onCheck={onCheck} />
    ));
  };
  return <>{renderTodos()}</>;
};

export default AllTodos;
