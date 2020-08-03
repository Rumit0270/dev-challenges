import React from 'react';
import { CountryDetail } from '../../api/countryApiService';

interface QuizOptionProps {
  sn: string;
  country: CountryDetail;
  showCorrect: boolean;
  showWrong: boolean;
  onClick: (selectedDetail: CountryDetail) => void;
}

const QuizOption: React.FC<QuizOptionProps> = ({
  sn,
  country,
  showCorrect,
  showWrong,
  onClick,
}): JSX.Element => {
  let correctClass = showCorrect ? 'quiz-option--correct' : '';
  let wrongClass = showWrong ? 'quiz-option--wrong' : '';
  let answerClicked = showCorrect || showWrong;
  let answerClass = answerClicked ? 'answer-selected' : '';

  return (
    <div
      className={`my-6 px-3 md:px-4 py-2 md:py-3 flex flex-row justify-between items-center cursor-pointer quiz-option ${correctClass} ${wrongClass} ${answerClass}`}
      onClick={() => onClick(country)}
    >
      <div className="flex items-center">
        <span className="mr-8 text-primary text-opacity-75 leading-9 font-poppins text-xl md:text-2xl">
          {sn}
        </span>
        <span className="text-primary text-opacity-75 leading-7 font-poppins text-base md:text-lg">
          {country.name}
        </span>
      </div>
      <div className="flex items-center">
        {showCorrect ? (
          <span className="material-icons text-white ml-3">
            check_circle_outline
          </span>
        ) : null}

        {showWrong ? (
          <span className="material-icons text-white ml-3">highlight_off</span>
        ) : null}
      </div>
    </div>
  );
};

export default QuizOption;
