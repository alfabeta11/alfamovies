'use server';

import { getSearchResults } from '@/app/lib/data';
import Gallery from '@/app/ui/gallery';
import Pagination from '@/app/ui/pagination';
import { CardsSkeleton, PaginationSkeleton } from '@/app/ui/skeletons';
import Heading from '@/app/ui/heading';
import { Suspense } from 'react';
import SearchResult from '@/app/ui/searchresult';

export default async function Page({
  searchParams,
}: {
  searchParams: { page: string; keyword: string; query?: string };
}) {
  const keyword = searchParams.keyword;
  const currentPage = Number(searchParams.page) || 1;
  const searchResults = await getSearchResults(keyword, currentPage);
  const totalPages = await searchResults?.totalPages;
  Promise.all([searchResults, totalPages]);
  const query = searchParams?.query || '';

  return (
    <>
      {query !== '' && (
        <Suspense>
          <SearchResult query={query} />
        </Suspense>
      )}
      <Heading name="Search results" type="movie" />
      {!keyword && (
        <p>
          Nothing was found! <br />
          Please type something in search bar.{' '}
        </p>
      )}
      {searchParams.keyword && (
        <>
          <Suspense fallback={<CardsSkeleton />}>
            <Gallery medias={searchResults?.data} />
          </Suspense>
          <Suspense fallback={<PaginationSkeleton />}>
            <Pagination totalPages={totalPages} />
          </Suspense>
        </>
      )}
    </>
  );
}
