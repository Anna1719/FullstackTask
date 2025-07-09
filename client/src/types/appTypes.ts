export interface DogItem {
  filename: string;
  url: string;
  likes: number;
  type: 'image' | 'video';
}

export interface Pagination {
  page: number;
  perPage: number;
  total: number;
}

export interface LikeResponse {
  success: boolean;
  likes: number;
}
