import React, { useState, useEffect } from 'react';

import styles from './Main.module.css';
import Header from '../Header/Header';
import {
  getRandomQuote,
  getQuotesByAuthor,
  Quote,
} from '../../services/quoteService';
import RandomQuote from '../RandomQuote/RandomQuote';
import AuthorQuotes from '../AuthorQuotes/AuthorQuotes';

const Main = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [quote, setQuote] = useState<Quote | null>(null);
  const [authorQuotes, setAuthorQuotes] = useState<Quote[]>([]);
  const [showRandomQuote, setShowRandomQuote] = useState<boolean>(true);

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const onMoreClick = () => {
    fetchRandomQuote();
  };

  const fetchRandomQuote = async () => {
    try {
      setShowRandomQuote(true);
      setLoading(true);
      let res = await getRandomQuote();
      setQuote(res.data.quote);
      setLoading(false);
    } catch (err) {
      setQuote(null);
      setLoading(false);
    }
  };

  const fetchAuthorQuotes = async () => {
    try {
      if (!quote) {
        return;
      }
      setShowRandomQuote(false);
      setLoading(true);
      let res = await getQuotesByAuthor(quote.quoteAuthor);
      setAuthorQuotes(res.data.quotes);
      setLoading(false);
    } catch (err) {
      setAuthorQuotes([]);
      setLoading(false);
    }
  };

  return (
    <>
      <Header loading={loading} onMorePress={onMoreClick} />
      <div className={`${styles['top-container']}`}>
        {showRandomQuote ? (
          <RandomQuote
            loading={loading}
            quote={quote}
            fetchAuthorQuotes={fetchAuthorQuotes}
          />
        ) : (
          <AuthorQuotes
            loading={loading}
            quotes={authorQuotes}
            currentQuote={quote}
          />
        )}
      </div>
    </>
  );
};

export default Main;
