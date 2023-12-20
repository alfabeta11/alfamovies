import Image from 'next/image';
import { getSearchResults } from '../lib/data';
import { media } from '../lib/definitions';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

export default async function SearchResult({ query }: { query: string }) {
  // console.log(query);
  const results = await getSearchResults(query, 1);
  const items = results?.data.slice(0, 5);
  // console.log(items);
  return items.length == 0 ? (
    <></>
  ) : (
    <div className="absolute top-0 z-10 w-full border-2 border-gray-900 bg-black shadow-lg">
      <div className="relative w-full">
        {items.map((item: media) => {
          return (
            <Link
              href={`/${item.media_type}/${item.id}`}
              className="flex w-full border-b-2 border-slate-800 px-4  py-2 last:border-b-0 hover:bg-slate-900"
              key={item.id}
            >
              <Image
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                width={40}
                height={50}
                alt={item.title || item.name || ''}
                className="mr-4"
              />
              <div>
                <h3>{item.name || item.title}</h3>
                <div className="flex gap-x-4 text-slate-500">
                  <span>{item.release_date || item.first_air_date}</span>
                  <span>-</span>
                  <span>{item.vote_average}</span>
                  <span>-</span>
                  <span>{item.media_type}</span>
                </div>
              </div>
            </Link>
          );
        })}
        <Link
          href={`/search/${query}`}
          className="flex items-center justify-center bg-green-600 py-4 text-lg hover:bg-green-700"
        >
          View all results <ChevronRightIcon className="h-5 w-5" />{' '}
        </Link>
      </div>
    </div>
  );
}
