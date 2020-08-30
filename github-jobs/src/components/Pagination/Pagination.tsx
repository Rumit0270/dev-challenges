import React, { useState } from 'react';
import Control from './Control';
import Button from './Button';
import Separator from './Separator';

interface PaginationProps {
  currentPage: number;
  totalPage: number;
  onPageClick: (page: number) => void;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPage,
  onPageClick,
  className = '',
}) => {
  const [activePage, setActivePage] = useState<number>(currentPage);

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber === activePage) {
      return;
    }

    onPageClick(pageNumber);
    setActivePage(pageNumber);
  };

  const handleLeftControlClick = () => {
    if (Math.abs(activePage - 1) >= 1) {
      setActivePage((val) => val - 1);
      onPageClick(activePage - 1);
    }
  };

  const handleRightControlClick = () => {
    if (Math.abs(activePage + 1) <= totalPage) {
      setActivePage((val) => val + 1);
      onPageClick(activePage + 1);
    }
  };

  if (totalPage <= 1) {
    return null;
  }

  const renderPaginationItems = () => {
    let items: JSX.Element[] = [];
    let isPreviousItemSeparator = false;

    for (let i = 1; i <= totalPage; i++) {
      if (i === 1 || i === totalPage || Math.abs(i - activePage) <= 1) {
        items.push(
          <Button pageNumber={i} isActive={i === activePage} onClick={handlePageClick} key={i} />,
        );
        isPreviousItemSeparator = false;
        continue;
      }

      if (!isPreviousItemSeparator) {
        items.push(<Separator key={i} />);
        isPreviousItemSeparator = true;
      }
    }

    return items;
  };

  return (
    <ul className={`list-none flex flex-wrap items-center w-100 justify-end ${className}`}>
      {activePage !== 1 ? (
        <Control iconName="keyboard_arrow_left" onClick={handleLeftControlClick} />
      ) : null}
      {renderPaginationItems()}
      {activePage !== totalPage ? (
        <Control iconName="keyboard_arrow_right" onClick={handleRightControlClick} />
      ) : null}
    </ul>
  );
};

export default Pagination;
