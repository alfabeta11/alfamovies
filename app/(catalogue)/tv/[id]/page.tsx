import MediaInfo from '@/app/ui/lector/mediainfo';
import { Suspense } from 'react';
import { CardsSkeleton, MediaSkeleton } from '@/app/ui/skeletons';
import Heading from '@/app/ui/heading';
import Suggestions from '@/app/ui/lector/suggestions';
import { Metadata, ResolvingMetadata } from 'next';
import { getMediaInfos } from '@/app/lib/data';

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const id = params.id;
  let res = await getMediaInfos(Number(id), 'tv');

  return {
    title: res?.infos.name,
  };
}
export default function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  return (
    <>
      <Suspense fallback={<MediaSkeleton />}>
        <MediaInfo id={id} mediaType="tv" />
      </Suspense>
      <Heading type="movie" name="You may also like" />
      <Suspense fallback={<CardsSkeleton />}>
        <Suggestions id={id} type="tv" />
      </Suspense>
    </>
  );
}
