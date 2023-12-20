import { Suspense } from 'react';
import { getPopular } from '../../lib/data';
import Gallery from '../../ui/gallery';
import { CardsSkeleton } from '../../ui/skeletons';
import Pagination from '@/app/ui/pagination';
import Heading from '@/app/ui/heading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Movies',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const currentPage = Number(searchParams?.page || 1);
  const result = await getPopular(currentPage, 'movie');
  const data = result?.data;
  return (
    <>
      <Heading name="Popular Movies" type="movie" />
      <Suspense fallback={<CardsSkeleton />}>
        <Gallery medias={data} type="movie" />
      </Suspense>

      <Pagination totalPages={500} />
    </>
  );
}
