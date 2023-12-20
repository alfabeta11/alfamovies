import { FilmIcon, TvIcon } from '@heroicons/react/24/solid';

export default function Heading({
  type,
  name,
}: {
  type: string;
  name: string;
}) {
  return (
    <h1
      className={`text-white-100 my-2 flex items-center justify-start gap-2 font-bold capitalize tracking-wide`}
    >
      
      {type == 'movie' && <FilmIcon className="h-8 w-8" />}
      {type == 'tv' && <TvIcon className="h-8 w-8" />}
      <span className="text-xl">{name}</span>
    </h1>
  );
}
