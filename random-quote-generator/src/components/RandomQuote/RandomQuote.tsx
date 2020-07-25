import React from 'react';

import styles from './RandomQuote.module.css';
import { Quote } from '../../services/quoteService';
import QuoteComponent from '../common/Quote/Quote';
import Loading from '../common/Loading/Loading';

interface RandomQuoteProps {
  loading: boolean;
  quote: Quote | null;
  fetchAuthorQuotes: () => void;
}

const RandomQuote: React.FC<RandomQuoteProps> = ({
  loading,
  quote,
  fetchAuthorQuotes,
}): JSX.Element => {
  const renderRandomQuote = () => {
    if (!quote) {
      return null;
    }
    return (
      <div>
        <QuoteComponent quote={quote} />
        <div
          className={styles['details-container']}
          onClick={fetchAuthorQuotes}
        >
          <div className={styles['quote-info']}>
            <span className={styles['quote__author']}>{quote.quoteAuthor}</span>
            <span className={styles['quote__genre']}>{quote.quoteGenre}</span>
          </div>
          <span className={`material-icons ${styles['quote-info__icon']} `}>
            arrow_right_alt
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className={styles['quote-container']}>
      {!loading ? renderRandomQuote() : <Loading />}
    </div>
  );
};

export default RandomQuote;
