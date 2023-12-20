import { Suspense } from 'react';
import { getTopRated } from '@/app/lib/data';
import Gallery from '@/app/ui/gallery';
import { CardsSkeleton } from '@/app/ui/skeletons';
import Pagination from '@/app/ui/pagination';
import Heading from '@/app/ui/heading';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import Buttons from '@/app/ui/imdbButtons';

export default async function Page({
  searchParams,
}: {
  searchParams?: { page?: string; type?: 'movie' | 'tv' };
}) {
  const currentPage = Number(searchParams?.page || 1);
  const type = searchParams?.type || 'movie';
  const result = await getTopRated(type, currentPage);
  function handleClick() {}
  return (
    <>
      <Heading name="Top IMDB" type="movie" />
      <Buttons />
      <Suspense fallback={<CardsSkeleton />}>
        <Gallery medias={result?.data} type={type} />
      </Suspense>

      <Pagination totalPages={result?.totalPages || 1} />
    </>
  );
}
