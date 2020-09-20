import { Request, Response, NextFunction } from 'express';
import { searchBreedByName } from '../api/catApiService';

export const getSearchBreedByName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const searchTerm = req.query.searchTerm;

  if (!searchTerm || typeof searchTerm !== 'string') {
    return res.status(400).json({
      error: 'Invalid request',
    });
  }

  try {
    const response = await searchBreedByName(searchTerm);
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};
