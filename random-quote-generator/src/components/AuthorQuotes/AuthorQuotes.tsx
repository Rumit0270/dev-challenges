import React from 'react';

import styles from './AuthorQuotes.module.css';
import { Quote } from '../../services/quoteService';
import Loading from '../common/Loading/Loading';
import QuoteComponent from '../common/Quote/Quote';

interface AuthorQuotesProps {
  loading: boolean;
  quotes: Quote[];
  currentQuote: Quote | null;
}

const AuthorQuotes: React.FC<AuthorQuotesProps> = ({
  loading,
  quotes,
  currentQuote,
}): JSX.Element => {
  const renderAuthorQuotes = () => {
    return quotes.map((quote) => (
      <QuoteComponent quote={quote} key={quote._id} />
    ));
  };

  if (loading) {
    return <Loading />;
  }

  if (!currentQuote) {
    return <></>;
  }

  return (
    <div className={styles['quotes-container']}>
      <h2 className={styles['author__name']}>{currentQuote.quoteAuthor}</h2>
      {renderAuthorQuotes()}
    </div>
  );
};

export default AuthorQuotes;
