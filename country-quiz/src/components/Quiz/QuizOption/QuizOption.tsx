import React from 'react';
import { CountryDetail } from '../../../api/countryApiService';

interface QuizOptionProps {
  sn: string;
  country: CountryDetail;
  showCorrect: boolean;
  showWrong: boolean;
  onClick: (selectedDetail: CountryDetail) => void;
  index: number;
}

const QuizOption: React.FC<QuizOptionProps> = ({
  sn,
  country,
  showCorrect,
  showWrong,
  index,
  onClick,
}): JSX.Element => {
  let correctClass = showCorrect ? 'quiz-option--correct' : '';
  let wrongClass = showWrong ? 'quiz-option--wrong' : '';
  let answerClicked = showCorrect || showWrong;
  let answerClass = answerClicked ? 'answer-selected' : '';

  return (
    <button
      className={`my-4 md:my-5 px-2 md:px-4 py-2 md:py-3 flex flex-row justify-between items-center cursor-pointer focus:shadow-outline quiz-option ${correctClass} ${wrongClass} ${answerClass}`}
      onClick={() => onClick(country)}
      tabIndex={index + 1}
    >
      <div className="flex items-center">
        <span className="mr-6 md:mr-8 text-primary text-opacity-75 leading-9 font-poppins text-lg md:text-2xl">
          {sn}
        </span>
        <span className="text-primary text-opacity-75 leading-7 font-poppins text-base md:text-lg">
          {country.name}
        </span>
      </div>
      <div className="flex items-center">
        {showCorrect ? (
          <span className="material-icons text-white ml-2 md:ml-3">
            check_circle_outline
          </span>
        ) : null}

        {showWrong ? (
          <span className="material-icons text-white ml-2 md:ml-3">
            highlight_off
          </span>
        ) : null}
      </div>
    </button>
  );
};

export default QuizOption;
