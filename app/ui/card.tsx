import Image from 'next/image';
import Link from 'next/link';
import { PlayCircleIcon } from '@heroicons/react/24/solid';
import { media } from '../lib/definitions';

const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export default function Card({
  media,
  mediaType,
}: {
  media: media;
  mediaType?: string;
}) {
  const type = media?.media_type || mediaType;
  return (
    <div className="group mx-auto w-full max-w-xs flex-col gap-2 overflow-hidden">
      <div
        className={`relative mb-2 aspect-[3/4] w-full overflow-hidden rounded-sm shadow shadow-slate-900`}
      >
        <Image
          src={
            `https://image.tmdb.org/t/p/original${media.poster_path}`
          }
          alt={media?.title || media?.name || ''}
          // fill={true}
          width={250}
          height={350}
          // className={`${shimmer} w-full bg-gray-600`}
          placeholder='blur'
          blurDataURL='/images/blur.png'
          className='w-full h-auto'

        />
        <Link
          href={`/${type}/${media.id}`}
          className="transition-all-700 absolute left-0 top-0 hidden h-0 w-full items-center justify-center bg-gradient-to-t from-cyan-600 group-hover:flex group-hover:h-full"
        >
          <PlayCircleIcon className="h-16 w-16" />
        </Link>
        <span>{media?.quality}</span>
      </div>
      <div className={`flex-col text-sm`}>
        <span className={`flex items-center justify-between text-slate-600`}>
          <span> {media?.vote_average.toFixed(2) || ''}</span>
          <span className="rounded-md border-2 border-slate-600 px-2 py-0 text-xs uppercase group-hover:border-cyan-400 group-hover:text-cyan-400">
            { media?.media_type || mediaType}
          </span>
          <span>
            {(media?.release_date || media?.first_air_date || '').slice(0, 4)}
          </span>
        </span>
        <Link href={`/${type}/${media.id}`} className="mt-1 block">
          <span className={`group-hover:text-cyan-400`}>
            {media.title || media.name}
          </span>
        </Link>
      </div>
    </div>
  );
}
