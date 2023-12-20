'use server';

import { getSearchResults } from '@/app/lib/data';
import Gallery from '@/app/ui/gallery';
import Pagination from '@/app/ui/pagination';
import { CardsSkeleton, PaginationSkeleton } from '@/app/ui/skeletons';
import Heading  from '@/app/ui/heading';
import { Suspense } from 'react';

export default async function Page({
  searchParams,
}: {
  searchParams: { page: string; keyword: string };
}) {
  // To get the keyword/query of the search from the pathname;
  // const headersList = headers();
  // const fullUrl = headersList.get('referer') || '';
  // const searchKeyword = fullUrl.split('/search/')[1];
  // console.log(searchKeyword);
  // const keyword = searchParams.keyword.split('-').join(' ');
  const query = searchParams.keyword;
  console.log(query);
  const currentPage = Number(searchParams.page) || 1;
  const searchResults = await getSearchResults(query, currentPage);
  const totalPages = await searchResults?.totalPages;
  Promise.all([searchResults, totalPages]);
  return (
    <>
      <Heading name="Search results" type="movie" />
      <Suspense fallback={<CardsSkeleton />}>
        <Gallery medias={searchResults?.data} />
      </Suspense>
      <Suspense fallback={<PaginationSkeleton />}>
        <Pagination totalPages={totalPages} />
      </Suspense>
    </>
  );
}
