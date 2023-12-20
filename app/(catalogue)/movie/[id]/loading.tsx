import { CardsSkeleton, LectorSkeleton } from '@/app/ui/skeletons';

export default function Loading() {
  return (
    <>
      <LectorSkeleton />
      <CardsSkeleton />
    </>
  );
}
