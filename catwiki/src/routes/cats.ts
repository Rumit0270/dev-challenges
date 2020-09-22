import { Router } from 'express';
import {
  getSearchBreedByName,
  getPopularBreeds,
  postSearchBreed,
  getBreedImages,
} from '../controllers/cats';

const router = Router();

router.get('/search', getSearchBreedByName);
router.get('/popular', getPopularBreeds);
router.post('/popular', postSearchBreed);
router.get('/images', getBreedImages);

export default router;
