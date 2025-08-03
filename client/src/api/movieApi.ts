// src/api/movieService.ts
import api from "./axios";
import type { Movie } from "../types/movie";

type PaginatedResponse = {
  data: Movie[];
  total: number;
  totalPages: number;
  currentPage: number;
};

export const fetchMovies = (
  page: number = 1,
  limit: number = 10
): Promise<PaginatedResponse> =>
  api.get(`/movies?page=${page}&limit=${limit}`).then(res => res.data);

  
// Create a new movie
export const createMovie = (data: Omit<Movie, "id">) =>
  api.post<Movie>("/movies", data).then(res => res.data);

// Update an existing movie
export const updateMovie = (id: number, data: Omit<Movie, "id">) =>
  api.put<Movie>(`/movies/${id}`, data).then(res => res.data);

// Delete a movie
export const deleteMovie = (id: number) =>
  api.delete(`/movies/${id}`);
