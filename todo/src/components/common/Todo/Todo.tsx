import React, { useState } from 'react';

import './Todo.css';
import { Todo as ITodo } from '../../../utils/todos';

interface TodoProps {
  todo: ITodo;
  isDeleteEnabled?: boolean;
  onDelete?: (id: number) => void;
  onCheck: (id: number, isCompleted: boolean) => void;
}

const Todo: React.FC<TodoProps> = ({
  todo,
  isDeleteEnabled = false,
  onDelete = (id) => {},
  onCheck,
}): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(todo.isCompleted);

  const handleCheckClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onCheck(todo.id, e.target.checked);
  };
  return (
    <div className="todo-container">
      <div className="todo">
        <input
          type="checkbox"
          className="todo__check"
          checked={checked}
          onChange={handleCheckClick}
        />
        <span
          className={`todo__title ${
            todo.isCompleted ? 'todo__title--completed' : ''
          }`}
        >
          {todo.title}
        </span>
      </div>

      {isDeleteEnabled ? (
        <span
          className="material-icons todo__delete"
          onClick={() => onDelete(todo.id)}
        >
          delete_outline
        </span>
      ) : null}
    </div>
  );
};

export default Todo;
