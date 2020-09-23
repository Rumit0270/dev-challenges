import { Request, Response, NextFunction } from 'express';

import { searchBreedByName, fetchBreedImages } from '../api/catApiService';
import FavouriteBreed from '../models/favouriteBreed';

/**
 * @swagger
 * /api/breeds/search:
 *   get:
 *     summary: Search a breed by given query string
 *     parameters:
 *       - name: searchTerm
 *         description: The term used to search for cat breed
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200': Success
 *       '400': Bad Request
 *       '500': Internal Server Error
 */
export const getSearchBreedByName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const searchTerm = req.query.searchTerm;

  if (!searchTerm || typeof searchTerm !== 'string') {
    return res.status(400).json({
      error: 'Bad Request',
    });
  }

  try {
    const response = await searchBreedByName(searchTerm);
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

/**
 * @swagger
 * /api/breeds/popular:
 *   get:
 *     summary: Get the top 10 most searched cat breed
 *     responses:
 *       '200': Success
 *       '500': Internal Server Error
 */
export const getPopularBreeds = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const breeds = await FavouriteBreed.find({})
      .sort({
        searchCount: -1,
        name: 1,
      })
      .limit(10);

    return res.status(200).json(breeds);
  } catch (err) {
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

/**
 * @swagger
 * /api/breeds/popular:
 *   post:
 *     summary: Add a new breed to Favourites breed if it did not exist else increment the search count of the breed
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               breed:
 *                 type: object
 *     responses:
 *       '200': Success
 *       '400': Bad Request
 *       '500': Internal Server Error
 */
export const postSearchBreed = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const breed = req.body.breed;
    const breedId = breed.breedId;

    if (!breed || !breed.name || !breed.description || !breed.breedId) {
      return res.status(400).json({
        error: 'Bad Request',
      });
    }

    const favouriteBreed = await FavouriteBreed.findOne({ breedId });

    if (favouriteBreed) {
      await FavouriteBreed.updateOne(
        { breedId },
        {
          $inc: { searchCount: 1 },
        }
      );

      return res.status(200).json({
        message: 'Success',
      });
    }

    // Get the image for this breed first. Save image of the breed in the document
    // so client does not have to make multiple request

    const breedImages = await fetchBreedImages(breedId);

    const breedImage = breedImages[0];

    const newFavouriteBreed = new FavouriteBreed({
      name: breed.name,
      description: breed.description,
      breedId: breed.breedId,
      searchCount: 1,
      imageUrl: breedImage,
    });

    await newFavouriteBreed.save();

    return res.status(200).json({
      message: 'Success',
    });
  } catch (err) {
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

/**
 * @swagger
 * /api/breeds/images:
 *   get:
 *     summary: Get the image(s) from the breed
 *     parameters:
 *       - name: breedId
 *         description: The id of the breed
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200': Success
 *       '400': Bad Request
 *       '500': Internal Server Error
 */
export const getBreedImages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const breedId = req.query.breedId;

    if (!breedId || typeof breedId !== 'string') {
      return res.status(400).json({
        error: 'Bad Request',
      });
    }

    const images = await fetchBreedImages(breedId, 10);

    return res.status(200).json(images);
  } catch (err) {
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};
