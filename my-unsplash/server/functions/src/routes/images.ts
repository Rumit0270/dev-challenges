import { Router } from 'express';
import { getImages, postImage, deleteImage } from '../controllers/images';

const router = Router();

router.get('/', getImages);
router.post('/', postImage);
router.delete('/:id', deleteImage);

export default router;
