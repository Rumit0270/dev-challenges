import React, { useState } from 'react';

interface JobSearchProps {
  onJobSearch: (jobText: string) => void;
}

const JobSearch: React.FC<JobSearchProps> = ({ onJobSearch }): JSX.Element => {
  const [searchText, setSearchText] = useState<string>('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onJobSearch(searchText);
    }
  };

  return (
    <div className="h- w-full relative rounded-lg mb-6 md:mb-8 font-roboto job-search-container">
      <div className="w-11/12 p-1 mx-auto absolute rounded job-search flex">
        <div className="flex-1 py-1 px-2 text-heather flex items-center">
          <span className="material-icons">work_outline</span>
          <input
            type="text"
            placeholder="Title, companies, expertise or benefits"
            className="flex-1 py-1 px-3 text-sm leading-3 h-full text-steel-gray job-search-input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
        </div>
        <button
          className="w-1/6 rounded font-semibold text-xs sm:text-sm lg:text-base leading-5 job-search-button"
          onClick={() => onJobSearch(searchText)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default JobSearch;
