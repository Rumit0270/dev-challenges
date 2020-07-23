import React, { useState } from 'react';

import './Todos.css';
import PageSwitcher, { Page } from '../common/PageSwitcher/PageSwitcher';
import AllTodos from './AllTodos/AllTodos';
import ActiveTodos from './ActiveTodos/ActiveTodos';
import CompletedTodos from './CompletedTodos/CompletedTodos';

const Todos: React.FC = () => {
  const [activePageId, setActivePageId] = useState<number>(1);

  const pages: Page[] = [
    { id: 1, title: 'All' },
    { id: 2, title: 'Active' },
    { id: 3, title: 'Completed' },
  ];

  const handlePageChange = (pageId: number) => {
    setActivePageId(pageId);
  };

  const renderPage = () => {
    switch (activePageId) {
      case 1:
        return <AllTodos />;
      case 2:
        return <ActiveTodos />;
      case 3:
        return <CompletedTodos />;
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
          <input type="text" className="input__text" placeholder="Add Todo" />
          <button type="button" className="input__button">
            Add
          </button>
        </div>
      ) : null}
      {renderPage()}
    </div>
  );
};

export default Todos;
