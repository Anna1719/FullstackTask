import { DogFile } from '../types/dogs.type';
import { DOG_API_URL } from '../config/constants';
import axios from 'axios';

class DogsService {
  private dogFiles: DogFile[] = [];
  private likes: Record<string, number> = {};

   public async initializeData(): Promise<void> {
    try {
      const response = await axios.get<string[]>(DOG_API_URL);
      
      this.dogFiles = response.data
        .filter(file => !file.endsWith('.gif'))
        .map(file => ({
          filename: file,
          url: `https://random.dog/${file}`,
          likes: this.likes[file] || 0,
          type: (file.endsWith('.mp4') || file.endsWith('.webm')) ? 'video' : 'image'
        }));

      console.log(`Initialized ${this.dogFiles.length} dog files`);
    } catch (error) {
      const err = error as Error;
      console.error('Failed to initialize dog data:', err.message);
      throw new Error('Failed to initialize data');
    }
  }


  public getAllDogs(): DogFile[] {
    return this.dogFiles;
  }

  public likeDog(filename: string): number {
    const dog = this.dogFiles.find(f => f.filename === filename);
    if (!dog) throw new Error('File not found');
    
    dog.likes += 1;
    this.likes[filename] = dog.likes;
    return dog.likes;
  }

  public getDog(filename: string): DogFile | undefined {
    return this.dogFiles.find(f => f.filename === filename);
  }
}

export default new DogsService();