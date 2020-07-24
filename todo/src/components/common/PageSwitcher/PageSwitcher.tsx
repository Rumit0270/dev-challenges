import React, { useState, useEffect, useRef } from 'react';

import './PageSwitcher.css';

const INDICATOR_WIDTH = 90;

export interface Page {
  id: number;
  title: string;
}
interface PageSwitcherProps {
  pages: Page[];
  onPageSwitch: (pageId: number) => void;
}

const PageSwitcher: React.FC<PageSwitcherProps> = ({
  pages,
  onPageSwitch,
}): JSX.Element => {
  let inidicatorContainerRef = useRef<HTMLDivElement>(null);
  let indicatorRefs: any[] = [];
  const [indicatorX, setIndicatorX] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const firstRef = indicatorRefs[0];
    handleIndicatorPosition(firstRef, inidicatorContainerRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleIndicatorPosition = (
    ref: React.RefObject<any>,
    containerRef: React.RefObject<any>
  ) => {
    if (ref.current && containerRef.current) {
      const {
        left: containerLeft,
      } = containerRef.current.getBoundingClientRect();

      const { left, width } = ref.current.getBoundingClientRect();

      // some math to position the indication exactly below the title
      const newIndicatorX =
        left - containerLeft + width / 2 - INDICATOR_WIDTH / 2;
      setIndicatorX(newIndicatorX);
    }
  };

  const handleOnPageSwitch = (pageId: number, pageIndex: number) => {
    const clickedRef = indicatorRefs[pageIndex];

    handleIndicatorPosition(clickedRef, inidicatorContainerRef);
    setActiveIndex(pageIndex);
    onPageSwitch(pageId);
  };

  const renderPageNavigators = () => {
    return pages.map((page, index) => {
      let ref = React.createRef<any>();
      indicatorRefs.push(ref);

      return (
        <div className="page-navigator" key={page.id}>
          <span
            onClick={() => handleOnPageSwitch(page.id, index)}
            className={`page-navigator__title ${
              index === activeIndex ? 'page-navigator__title--active' : ''
            }`}
            ref={ref}
          >
            {page.title}
          </span>
        </div>
      );
    });
  };

  if (pages.length <= 0) {
    return <div>Please provide at least one page to render.</div>;
  }

  return (
    <div className="page-switcher-container" ref={inidicatorContainerRef}>
      {renderPageNavigators()}
      <span
        className="page-navigator__indicator"
        style={{ left: `${indicatorX}px` }}
      ></span>
    </div>
  );
};

export default PageSwitcher;
