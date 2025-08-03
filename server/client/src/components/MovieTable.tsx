import type { Movie } from "../types/movie";

type Props = {
  movies: Movie[];
  onEdit: (movie: Movie) => void;
  onDelete: (id: number) => void;
};

export default function MovieTable({ movies, onEdit, onDelete }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border divide-y divide-gray-300">
        <thead className="bg-gray-100">
          <tr>
            {[
              "Title",
              "Type",
              "Director",
              "Budget",
              "Location",
              "Duration",
              "Year",
              "Actions",
            ]?.map((h) => (
              <th key={h} className="px-4 py-2 text-left">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {movies?.map((m:any) => (
            <tr key={m.id} className="border-b">
              <td className="px-4 py-2">{m.title}</td>
              <td className="px-4 py-2">{m.type}</td>
              <td className="px-4 py-2">{m.director}</td>
              <td className="px-4 py-2">{m.budget}</td>
              <td className="px-4 py-2">{m.location}</td>
              <td className="px-4 py-2">{m.duration}</td>
              <td className="px-4 py-2">{m.year_time}</td>
              <td className="px-4 py-2 space-x-2">
                <button
                  onClick={() => onEdit(m)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(m.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
