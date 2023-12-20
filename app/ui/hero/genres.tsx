export default function Genres({ genres }: { genres: [] }) {
  return (
    <ul className="flex items-center justify-center divide-x md:max-w-max">
      {genres.map((genre: { id: number; name: string }) => {
        return (
          <li key={genre.id} className="px-4 text-sm text-gray-300  first:pl-0">
            {genre.name}
          </li>
        );
      })}
    </ul>
  );
}