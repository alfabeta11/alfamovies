import { Suspense } from 'react';
import { getPopular } from '@/app/lib/data';
import Gallery from '@/app/ui/gallery';
import { CardsSkeleton } from '@/app/ui/skeletons';
import Pagination from '@/app/ui/pagination';
import { Metadata } from 'next';
import SearchResult from '@/app/ui/searchresult';
import Heading from '@/app/ui/heading';

export const metadata: Metadata = {
  title: 'TV Shows',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: { page?: string; query?: string };
}) {
  const currentPage = Number(searchParams?.page || 1);
  const result = await getPopular(currentPage, 'tv');
  const data = result?.data;
  const query = searchParams?.query || '';
  return (
    <>
      {query !== '' && (
        <Suspense>
          <SearchResult query={query} />
        </Suspense>
      )}
      <Heading type="tv" name="Popular TV Shows" />
      <Suspense fallback={<CardsSkeleton />}>
        <Gallery medias={data} type="tv" />
      </Suspense>

      <Pagination totalPages={500} />
    </>
  );
}
