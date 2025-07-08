import { Request, Response } from 'express';
import dogsService from '../services/dogs.service';
import { DogResponse } from '../types/dogs.type';

class DogsController {
  public async getDogs(req: Request, res: Response<DogResponse>): Promise<void> {
    try {
      const dogs = dogsService.getAllDogs();
      res.status(200).json({
        success: true,
        data: dogs
      });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Unknown error occurred';
      res.status(500).json({
        success: false,
        message
      });
    }
  }

  public async likeDog(req: Request, res: Response<DogResponse>): Promise<void> {
    try {
      const { filename } = req.params;
      const likes = dogsService.likeDog(filename);
      
      res.status(200).json({
        success: true,
        likes,
        message: 'Like added successfully'
      });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'File not found';
      res.status(404).json({
        success: false,
        message
      });
    }
  }
}

export default new DogsController();