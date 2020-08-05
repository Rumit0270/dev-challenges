import React, { useEffect, useState } from 'react';

import quizLogo from '../../images/undraw_adventure_4hum 1.svg';
import resultImg from '../../images/undraw_winners_ao2o 2.svg';
import { generateNumberBetween } from '../../utils';
import {
  CountryDetail,
  fetchCountryDetails,
} from '../../api/countryApiService';
import useRandomQuizOptions from '../../hooks/useRandomQuizOptions';
import QuizOption from './QuizOption/QuizOption';

const NUMBER_OF_OPTIONS = 4;

enum QuestionType {
  CAPITAL = 'CAPITAL',
  FLAG = 'FLAG',
}

const optionSNs = ['A', 'B', 'C', 'D'];

let questionType: QuestionType = QuestionType.CAPITAL;

const Quiz: React.FC = (): JSX.Element => {
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [userScore, setUserScore] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentCountryDetail, setCurrentCountryDetail] = useState<
    CountryDetail
  >();
  const [countryDetails, setCountryDetails] = useState<CountryDetail[]>([]);
  const [
    selectedCountryDetail,
    setSelectedCountryDetail,
  ] = useState<CountryDetail | null>(null);
  const [options] = useRandomQuizOptions(
    NUMBER_OF_OPTIONS,
    currentCountryDetail,
    countryDetails
  );

  /// Randomly assign new country for quiz
  const selectRandomCountryDetail = (): void => {
    let index = generateNumberBetween(0, countryDetails.length);
    setCurrentCountryDetail(countryDetails[index]);
  };

  /// Randomly select a question type
  const selectQuestionType = (): void => {
    let index = generateNumberBetween(0, 2);
    let type = index === 0 ? QuestionType.CAPITAL : QuestionType.FLAG;
    questionType = type;
  };

  /// Fetch all country details
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetchCountryDetails();
        let allDetails = res.data.filter(
          (detail) =>
            detail.name !== '' && detail.capital !== '' && detail.flag !== ''
        );
        setCountryDetails(allDetails);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setCountryDetails([]);
      }
    })();
  }, []);

  /// Set initial quiz question
  useEffect(() => {
    showNextQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryDetails]);

  /// Restart the game
  const restartQuiz = () => {
    setUserScore(0);
    setGameOver(false);
    showNextQuestion();
  };

  /// Show next question
  const showNextQuestion = () => {
    selectQuestionType();
    selectRandomCountryDetail();
    setSelectedCountryDetail(null);
  };

  /// Handler when an option is selected
  const onOptionSelect = (selectedDetail: CountryDetail) => {
    if (selectedCountryDetail || !currentCountryDetail) {
      return;
    }
    if (selectedDetail.name === currentCountryDetail.name) {
      setUserScore((prevScore) => prevScore + 1);
    }
    setSelectedCountryDetail(selectedDetail);
  };

  /// Handler when next is pressed
  const onNextClick = () => {
    if (!selectedCountryDetail) {
      return;
    }

    if (
      currentCountryDetail &&
      selectedCountryDetail &&
      currentCountryDetail.name !== selectedCountryDetail.name
    ) {
      setGameOver(true);
      return;
    }

    showNextQuestion();
  };

  ///
  const renderQuestion = () => {
    if (!currentCountryDetail) {
      return null;
    }

    if (questionType === QuestionType.CAPITAL) {
      return (
        <h2 className="font-poppins text-tropaz text-xl md:text-2xl font-bold mb-2 md:mb-3">
          {currentCountryDetail.capital} is the capital of
        </h2>
      );
    }

    return (
      <div className="mb-4 md:mb-6">
        <img
          src={currentCountryDetail.flag}
          alt="Flag of current quiz question"
          className="country-flag mb-3 md:mb-4"
        />
        <h2 className="font-poppins text-dark text-xl md:text-2xl font-bold leading-9">
          Which country does this flag belong to ?
        </h2>
      </div>
    );
  };

  /// Helpers to determine the answer selection state
  const showShowCorrect = (country: CountryDetail): boolean => {
    if (!selectedCountryDetail || !currentCountryDetail) {
      return false;
    }
    return country.name === currentCountryDetail.name;
  };

  const shouldShowWrong = (country: CountryDetail): boolean => {
    if (!selectedCountryDetail || !currentCountryDetail) {
      return false;
    }

    return (
      country.name === selectedCountryDetail.name &&
      country.name !== currentCountryDetail.name
    );
  };
  ///

  const renderOptions = () => {
    return options.map((option, index) => {
      let sn = optionSNs[index];

      return (
        <QuizOption
          key={`${option.name}${index}`}
          sn={sn}
          country={option}
          showCorrect={showShowCorrect(option)}
          showWrong={shouldShowWrong(option)}
          onClick={onOptionSelect}
          index={index}
        />
      );
    });
  };

  ///

  if (loading) {
    return <span className="text-light text-lg">Loading...</span>;
  }

  return (
    <div className="m-3">
      <div className="relative flex">
        <h1 className="font-poppins font-bold uppercase text-2xl md:text-4xl text-light mr-40 md:mr-48">
          Country Quiz
        </h1>
        {!gameOver ? (
          <img src={quizLogo} alt="Quiz Logo" className="absolute quiz-logo" />
        ) : null}
      </div>

      <div className="quiz-container bg-white mt-2 pt-12 md:pt-16 px-4 pb-6 md:px-8 md:pb-10">
        {!gameOver ? (
          <>
            {renderQuestion()}
            {renderOptions()}
            <div className="flex justify-end">
              <button
                className="font-poppins font-bold text-white text-base  md:text-lg leading-6 md:leading-7 bg-warn py-2 md:py-3 px-6 md:px-8 focus:shadow-outline next-button"
                onClick={onNextClick}
                tabIndex={5}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center -mt-6 px-4">
            <img src={resultImg} alt="Winners" className="winners-img mb-20" />
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-dark leading-10 mb-10">
              Results
            </h2>
            <p className="font-poppins text-dark text-base md:text-lg leading-7 mb-16">
              You got
              <span className="text-success text-3xl md:text-4xl mx-1">
                {userScore}
              </span>
              correct answers
            </p>
            <button
              className="font-poppins font-semibold text-dark text-base md:text-lg leading-7 border-dark border-2 rounded-lg px-10 md:px-12 py-3 md:py-4 focus:shadow-outline"
              onClick={restartQuiz}
              tabIndex={0}
            >
              Try again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
