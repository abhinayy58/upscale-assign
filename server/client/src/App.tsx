import { useEffect, useState } from "react";
import { useInfiniteMovies } from "./hooks/useMovie"; // Infinite scroll hook
import MovieForm from "./components/MovieForm";
import MovieTable from "./components/MovieTable";
import Modal from "./components/Modal";
import type { Movie } from "./types/movie";
import { createMovie, updateMovie, deleteMovie } from "./api/movieApi";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [editing, setEditing] = useState<Movie | null>(null);

  const { movies, loading, loadMore, hasMore, reload } =
    useInfiniteMovies();

  // Infinite scroll on window scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100 &&
        hasMore
      ) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore]);

  const handleSubmit = async (movie: Movie) => {
    if (editing && editing.id) {
      await updateMovie(editing.id, movie);
    } else {
      await createMovie(movie);
    }
    reload(); // Fetch page 1 again
    setIsOpen(false);
    setEditing(null);
  };

  const handleDelete = async (id: number) => {
    await deleteMovie(id);
    reload();
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">🎬 Favorite Movies & TV Shows</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          + Add New
        </button>
      </div>

      <MovieTable
        movies={movies}
        onEdit={(movie) => {
          setEditing(movie);
          setIsOpen(true);
        }}
        onDelete={handleDelete}
      />

      {loading && <p className="text-center mt-4">Loading...</p>}
      {!hasMore && !loading && (
        <p className="text-center mt-4 text-gray-500">
          🎉 You've reached the end.
        </p>
      )}

      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          setEditing(null);
        }}
      >
        <MovieForm
          initialData={editing ?? undefined}
          onSubmit={handleSubmit}
          onClose={() => setIsOpen(false)}
        />
      </Modal>
    </div>
  );
}

export default App;
