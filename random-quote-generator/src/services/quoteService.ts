import apiService from './apiService';

export interface Quote {
  _id: string;
  quoteText: string;
  quoteAuthor: string;
  quoteGenre: string;
}
interface IRandomQuoteResponse {
  statusCode: number;
  message?: string;
  data: Quote[];
}
interface IQuotesByAuthorResponse {
  statusCode: number;
  totalQuotes: number;
  pagination?: object;
  data: Quote[];
}

export const getRandomQuote = () => {
  return apiService.get<IRandomQuoteResponse>('/quotes/random');
};

export const getQuotesByAuthor = (
  authorName: string,
  page: number = 1,
  limit: number = 3
) => {
  return apiService.get<IQuotesByAuthorResponse>(
    `/quotes?author=${authorName}&page=${page}&limit=${limit}`
  );
};
