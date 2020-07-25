import React from 'react';

import styles from './AuthorQuote.module.css';
import { Quote } from '../../services/quoteService';

interface AuthorQuotesProps {
  loading: boolean;
  quotes: Quote[];
  currentQuote: Quote | null;
}

const AuthorQuotes: React.FC<AuthorQuotesProps> = (): JSX.Element => {
  return <div>AuthorQuote</div>;
};

export default AuthorQuotes;
