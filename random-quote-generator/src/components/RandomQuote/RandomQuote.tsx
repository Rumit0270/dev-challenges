import React from 'react';

import styles from './RandomQuote.module.css';
import { Quote } from '../../services/quoteService';

interface RandomQuoteProps {
  loading: boolean;
  quote: Quote | null;
  fetchAuthorQuotes: () => void;
}

const RandomQuote: React.FC<RandomQuoteProps> = (): JSX.Element => {
  return <div>RandomQuote</div>;
};

export default RandomQuote;
