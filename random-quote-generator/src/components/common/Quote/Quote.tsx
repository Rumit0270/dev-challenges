import React from 'react';

import styles from './Quote.module.css';
import { Quote as IQuote } from '../../../services/quoteService';

interface QuoteProps {
  quote: IQuote;
}

const Quote: React.FC<QuoteProps> = ({ quote }): JSX.Element => {
  return <blockquote className={styles['quote']}>{quote.quoteText}</blockquote>;
};

export default Quote;
