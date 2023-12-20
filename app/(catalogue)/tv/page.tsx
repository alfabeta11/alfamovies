import { Suspense } from 'react';
import { getPopular } from '@/app/lib/data';
import Gallery from '@/app/ui/gallery';
import { CardsSkeleton } from '@/app/ui/skeletons';
import Pagination from '@/app/ui/pagination';

export default async function Page({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const currentPage = Number(searchParams?.page || 1);
  const result = await getPopular(currentPage, 'tv');
  const data = result?.data;
  return (
    <>
      <Suspense fallback={<CardsSkeleton />}>
        <Gallery medias={data} type="tv" />
      </Suspense>
      
      <Pagination totalPages={500} />
    </>
  );
}
