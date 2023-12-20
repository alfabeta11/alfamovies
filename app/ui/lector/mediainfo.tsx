import { getCredits, getMediaInfos } from '@/app/lib/data';
import clsx from 'clsx';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/outline';
import { formatDuration } from '@/app/lib/utils';

export default async function MediaInfo({
  id,
  mediaType,
}: {
  id: number;
  mediaType: string;
}) {
  let media = await getMediaInfos(id, mediaType);
  let cast = await getCredits(id, mediaType);
  return (
    <div className="text-white-200 mb-4 w-full items-start gap-8 overflow-hidden rounded-md bg-slate-900 px-8 pb-12 pt-8 font-thin md:flex md:gap-4 lg:mb-6 ">
      <div className="mx-auto  h-max max-w-[275px] flex-col overflow-hidden rounded-sm bg-slate-800 md:mx-0 md:w-max md:min-w-[200px]">
        <Image
          src={`https://image.tmdb.org/t/p/original${media?.infos.poster_path}`}
          width={200}
          height={266}
          alt={media?.infos.title || media?.infos.name}
          className="aspect-[3/4] h-auto w-full object-cover shadow-sm shadow-slate-900"
        />
        <span
          className={clsx(
            'block flex items-center justify-center gap-4 py-2 text-xl font-normal',
            {
              'bg-red-400': media?.infos.vote_average <= 2,
              'bg-yellow-400':
                2 < media?.infos.vote_average && media?.infos.vote_average <= 6,
              'text-white-200 bg-green-600': media?.infos.vote_average > 6,
            },
          )}
        >
          <StarIcon className="h-6 w-6" />
          <span>{media?.infos.vote_average} / 10</span>
        </span>
      </div>
      <div className="max-w-[400px] flex-col justify-center md:max-w-full">
        <h1 className="mb-1 mt-4 bg-gradient-to-r from-cyan-900 py-2 pl-2 text-2xl font-bold md:mt-0 md:text-4xl">
          {media?.infos.title || media?.infos.name}
        </h1>
        <p className="mt-2 mb-4 md:text-left">{media?.infos.overview}</p>
        <div className="mt-2 w-full grid-cols-2 capitalize md:grid">
          <span className="block">
            <span className="mr-1 font-bold">Released:</span>
            {media?.infos.release_date || media?.infos.first_air_date}
          </span>
          <span className="block">
            <span className="mr-1 font-bold">Language: </span>
            {media?.infos.original_language}
          </span>
          <span className="block">
            <span className="mr-1 font-bold">IMDB: </span>
            {Number.parseFloat(media?.infos.vote_average).toFixed(2) || ''}
          </span>
          <span className="block">
            <span className="mr-1 font-bold">Genres: </span>
            {media?.genres}
          </span>
          <span className="block">
            <span className="mr-1 font-bold">Casts: </span>
            {cast}
          </span>
          <span className="block">
            <span className="mr-1 font-bold">
              {mediaType == 'movie' ? 'Duration: ' : 'Seasons: '}
            </span>
            {mediaType == 'movie'
              ? formatDuration(media?.infos.runtime)
              : media?.infos.seasons.length}
          </span>
          <span className="block grow">
            <span className="mr-1 font-bold">Production: </span>
            {media?.productions}
          </span>
        </div>
      </div>
    </div>
  );
}
