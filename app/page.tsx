import Hero from './ui/hero/hero';
import Trending, { Upcomings } from './ui/trending';
import { Suspense } from 'react';
import { CardsSkeleton, HeroSkeleton } from './ui/skeletons';
import Heading from './ui/heading';
import SearchResult from './ui/searchresult';

export default async function Page({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const query = searchParams.query || '';
  return (
    <>
      {query !== '' && (
        <Suspense>
          <SearchResult query={query} />
        </Suspense>
      )}
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      <Heading type="movie" name="Trending Movies" />
      <Suspense fallback={<CardsSkeleton />}>
        <Trending type="movie" />
      </Suspense>
      <Heading type="tv" name="Trending TV Shows" />
      <Suspense fallback={<CardsSkeleton />}>
        <Trending type="tv" />
      </Suspense>
      <Heading type="movie" name="Upcoming Movies" />
      <Suspense fallback={<CardsSkeleton />}>
        <Upcomings type='movie' />
      </Suspense>
    </>
  );
}
