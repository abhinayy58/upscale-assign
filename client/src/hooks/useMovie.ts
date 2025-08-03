// hooks/useMovies.ts
import { useEffect, useState } from "react";
import { fetchMovies } from "../api/movieApi";
import type { Movie } from "../types/movie";

export const useInfiniteMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadMovies = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const res = await fetchMovies(page, 10);
      setMovies((prev) => [...prev, ...res.movies]);
      setHasMore(page < res.totalPages);
    } catch (err) {
      console.error("Failed to load movies", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMovies();
  }, [page]);

  const loadMore = () => {
    if (hasMore) setPage((prev) => prev + 1);
  };

  const reload = () => {
    setMovies([]);
    setPage(1);
    setHasMore(true);
  };

  return { movies, loading, loadMore, hasMore, setMovies, reload };
};
