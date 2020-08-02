import React from 'react';
import quizLogo from '../../images/undraw_adventure_4hum 1.svg';

const Quiz: React.FC = (): JSX.Element => {
  return (
    <div>
      <div className="relative flex">
        <h1 className="font-poppins font-bold uppercase text-4xl text-light mr-48">
          Country Quiz
        </h1>
        <img src={quizLogo} alt="Quiz Logo" className="absolute quiz-logo" />
      </div>

      <div className="quiz-container bg-white mt-2 pt-16 px-5 pb-10"></div>
    </div>
  );
};

export default Quiz;
