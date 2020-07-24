import React, { useState, useEffect } from 'react';

import './Todos.css';
import PageSwitcher, { Page } from '../common/PageSwitcher/PageSwitcher';
import AllTodos from './AllTodos/AllTodos';
import ActiveTodos from './ActiveTodos/ActiveTodos';
import CompletedTodos from './CompletedTodos/CompletedTodos';
import {
  Todo,
  deleteAllTodos,
  deleteTodo,
  saveTodo,
  getAllTodos,
  checkTodo,
} from '../../utils/todos';

const pages: Page[] = [
  { id: 1, title: 'All' },
  { id: 2, title: 'Active' },
  { id: 3, title: 'Completed' },
];

const Todos: React.FC = () => {
  const [activePageId, setActivePageId] = useState<number>(1);
  const [todoText, setTodoText] = useState<string>('');
  const [allTodos, setAllTodos] = useState<Todo[]>([]);

  let completeTodos = allTodos.filter((todo) => todo.isCompleted);
  let activeTodos = allTodos.filter((todo) => !todo.isCompleted);

  useEffect(() => {
    syncTodos();
  }, []);

  // Helpers start
  const syncTodos = () => {
    let todos = getAllTodos();
    setAllTodos(todos);
  };

  const handlePageChange = (pageId: number) => {
    setActivePageId(pageId);
  };

  const onSaveTodo = () => {
    if (todoText.length <= 0) {
      return;
    }

    setTodoText('');
    saveTodo({
      id: allTodos.length,
      title: todoText,
      isCompleted: false,
    });

    syncTodos();
  };

  const onCheckTodo = (id: number, isCompleted: boolean): void => {
    checkTodo(id, isCompleted);
    syncTodos();
  };

  const onDeleteTodo = (id: number) => {
    deleteTodo(id);
    syncTodos();
  };

  const onDeleteAll = () => {
    deleteAllTodos();
    syncTodos();
  };

  /// helpers end

  const renderPage = () => {
    switch (activePageId) {
      case 1:
        return <AllTodos todos={allTodos} onCheck={onCheckTodo} />;
      case 2:
        return <ActiveTodos todos={activeTodos} onCheck={onCheckTodo} />;
      case 3:
        return (
          <CompletedTodos
            todos={completeTodos}
            onCheck={onCheckTodo}
            onDelete={onDeleteTodo}
            onDeleteAll={onDeleteAll}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="todos-container">
      <h1 className="todos__title">#todo</h1>
      <PageSwitcher pages={pages} onPageSwitch={handlePageChange} />

      {activePageId !== 3 ? (
        <div className="input-container">
          <input
            type="text"
            className="input__text"
            placeholder="Add Todo"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <button type="button" className="input__button" onClick={onSaveTodo}>
            Add
          </button>
        </div>
      ) : null}
      {renderPage()}
    </div>
  );
};

export default Todos;
