import React from 'react';

import './CompletedTodos.css';
import { Todo } from '../../../utils/todos';
import TodoComponent from '../../common/Todo/Todo';

interface CompletedTodosProps {
  todos: Todo[];
  onCheck: (id: number, isCompleted: boolean) => void;
  onDelete: (id: number) => void;
  onDeleteAll: () => void;
}

const CompletedTodos: React.FC<CompletedTodosProps> = ({
  todos,
  onCheck,
  onDelete,
  onDeleteAll,
}) => {
  const renderTodos = () => {
    return todos.map((todo) => (
      <TodoComponent
        todo={todo}
        key={todo.id}
        onCheck={onCheck}
        onDelete={onDelete}
        isDeleteEnabled={true}
      />
    ));
  };
  return (
    <>
      {renderTodos()}
      <div className="delete-container">
        <button onClick={onDeleteAll} className="btn-delete-all">
          <span className="material-icons todo__delete">delete_outline</span>
          Delete All
        </button>
      </div>
    </>
  );
};

export default CompletedTodos;
