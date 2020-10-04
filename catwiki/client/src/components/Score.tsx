import React from 'react';

interface ScoreProps {
  total?: number;
  current: number;
}

const Score: React.FC<ScoreProps> = ({ total = 5, current }): JSX.Element => {
  const renderScores = () => {
    const scores: JSX.Element[] = [];

    for (let i = 0; i < total; i++) {
      const scoreClass = i < current ? 'score--highlighted' : '';
      scores.push(<span className={`flex-1 score ${scoreClass}`}></span>);
    }

    return scores;
  };

  return <div className="flex scores">{renderScores()}</div>;
};

export default Score;
