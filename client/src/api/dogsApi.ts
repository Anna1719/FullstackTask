import axios from "axios";
import { DogItem, LikeResponse } from "../types/appTypes";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const getDogs = async (): Promise<DogItem[]> => {
  const response = await api.get("/dogs");
  return response.data.data || [];
};

export const likeDog = async (filename: string): Promise<LikeResponse> => {
  const response = await api.post(`dogs/like/${filename}`);
  return response.data;
};
