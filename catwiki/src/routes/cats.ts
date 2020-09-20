import { Router } from 'express';
import { getSearchBreedByName } from '../controllers/cats';

const router = Router();

router.get('/search', getSearchBreedByName);

export default router;
