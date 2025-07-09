export type DogFile = {
  filename: string;
  url: string;
  likes: number;
  type: 'image' | 'video';
};

export type DogResponse = {
  success: boolean;
  message?: string;
  data?: DogFile | DogFile[];
  likes?: number;
};