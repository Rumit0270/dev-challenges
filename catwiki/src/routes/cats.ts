import { Router } from 'express';
import {
  getSearchBreedByName,
  getPopularBreeds,
  postSearchBreed,
} from '../controllers/cats';

const router = Router();

router.get('/search', getSearchBreedByName);
router.get('/popular', getPopularBreeds);
router.post('/popular', postSearchBreed);

export default router;
