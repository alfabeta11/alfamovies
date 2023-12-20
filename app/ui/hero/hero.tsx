import { getTrendingMovie, getGenre } from '../../lib/data';
import { StarIcon } from '@heroicons/react/24/outline';
import Background from './background';
import HeroTitle from './title';
import Genres from './genres';
import CTA from './cta';

export default async function Hero() {
  const hero = await getTrendingMovie();

  return (
    <div className="relative mb-4 h-[80vh] w-full overflow-hidden rounded-md">
      <Background backdrop_path={hero.backdrop_path} title={hero.title} />

      <div className="hero-gradient absolute left-0 top-0 z-0 flex h-full w-full items-center justify-center md:items-end md:justify-start md:py-16">
        <div className="flex-col justify-center px-8">
          <Genres
            genres={hero.genre_ids.map((genre: number) => {
              return getGenre(genre);
            })}
          />
          <HeroTitle title={hero.title} />
          <Description overview={hero.overview} />
          <DateAndRating date={hero.release_date} rating={hero.vote_average} />
          <CTA url={`/movie/${hero.id}`} />
        </div>
      </div>
    </div>
  );
}

export function Description({ overview }: { overview: string }) {
  return (
    <p className="mb-8 text-center text-sm text-slate-300 md:text-left md:text-base lg:w-1/2">
      {overview}
    </p>
  );
}

export function DateAndRating({
  date,
  rating,
}: {
  date: string;
  rating: string;
}) {
  return (
    <div className="flex items-center justify-center divide-x md:max-w-max">
      <span className="pr-3 text-slate-400">{date}</span>
      <span className="flex items-center justify-center gap-1 pl-3">
        <StarIcon className="h-6 w-6" />
        <span>{Number.parseFloat(rating).toFixed(2)}</span>
      </span>
    </div>
  );
}
