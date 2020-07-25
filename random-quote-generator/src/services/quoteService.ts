import apiService from './apiService';

interface Quote {
  _id: string;
  quoteText: string;
  quoteAuthor: string;
}

interface IRandomQuoteResponse {
  statusCode: number;
  quote: Quote;
}

interface IQuotesByAuthorResponse {
  statusCode: number;
  totalPages: number;
  currentPage: number;
  quotes: Quote[];
}

export const getRandomQuote = () => {
  return apiService.get<IRandomQuoteResponse>('/quotes/random');
};

export const getQuotesByAuthor = (
  authorName: string,
  page: number = 1,
  limit: number = 10
) => {
  return apiService.get<IQuotesByAuthorResponse>(
    `/authors/${authorName}?page=${page}&limit=${limit}`
  );
};
