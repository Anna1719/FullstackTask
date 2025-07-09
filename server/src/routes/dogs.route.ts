import { Router } from 'express';
import dogsController from '../controllers/dogs.controller';

const router = Router();

router.get('/', dogsController.getDogs);
router.post('/like/:filename', dogsController.likeDog);

export default router;