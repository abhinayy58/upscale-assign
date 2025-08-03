import { useEffect, useState } from "react";
import type { Movie } from "../types/movie";

type Props = {
  onSubmit: (movie: Omit<Movie, "id">, id?: number) => void;
  onClose: () => void;
  initialData?: Movie | null;
};

const defaultForm: Omit<Movie, "id"> = {
  title: "",
  type: "Movie",
  director: "",
  budget: "",
  location: "",
  duration: "",
  year_time: "",
};

export default function MovieForm({ onSubmit, onClose, initialData }: Props) {
  const [form, setForm] = useState<Omit<Movie, "id">>(defaultForm);

  useEffect(() => {
    if (initialData) {
      const { id, ...rest } = initialData;
      setForm(rest);
    }
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form, initialData?.id);
    setForm(defaultForm);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      {["title", "director", "budget", "location", "duration", "year_time"].map(
        (field) => (
          <input
            key={field}
            name={field}
            value={form[field as keyof typeof form]}
            onChange={handleChange}
            placeholder={field}
            required
            className="w-full px-3 py-2 border rounded"
          />
        )
      )}
      <select
        name="type"
        value={form.type}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded"
      >
        <option value="Movie">Movie</option>
        <option value="TV Show">TV Show</option>
      </select>
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onClose}
          className="border px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
