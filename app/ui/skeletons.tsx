// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';
export function CardSkeleton() {
  return (
    <div
      className={`relative w-[200] overflow-hidden rounded-md bg-gray-900 p-2 shadow-sm`}
    >
      <div className={`${shimmer} h-44 bg-gray-700 p-2`}></div>
      <div className="mt-4 h-4 w-1/3 bg-gray-700"></div>
      <div className="mt-2 h-4 w-2/3 bg-gray-700"></div>
    </div>
  );
}
export function CardsSkeleton() {
  return (
    <div className={`lg:grid-cols-auto grid grid-cols-2 gap-4 md:grid-cols-3 mb-4`}>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}
export function HeroSkeleton() {
  return (
    <div className={`flex justify-center items-center h-[80vh] w-full overflow-hidden p-8 md:py-16 mb-8 bg-slate-800`}>
      <div className="inset-1/2 w-1/2">
        <GenresSkeleton />
        <TitleSkeleton />
        <DescriptionSkeleton />
        <div className="flex-col gap-4 md:flex">
          <div className={`absolute ${shimmer} w-64 h-20 bg-gray-600 rounded-md mb-2`}></div>
          <div className={`absolute ${shimmer} w-64 h-20 bg-gray-600 rounded-md`}></div>
        </div>
      </div>
    </div>
  );
}
export function BackgroundSkeleton() {
  return(
    <div className={`${shimmer} relative`}></div>
  )
}
export function GenresSkeleton() {
  return (
    <div className={`flex`}>
      <span className={`relative ${shimmer} h-4 w-16 bg-gray-600 mr-2`}></span>
      <span className={`relative ${shimmer} h-4 w-16 bg-gray-600 mr-2`}></span>
      <span className={`relative ${shimmer} h-4 w-16 bg-gray-600 mr-2`}></span>
    </div>
  );
}
export function TitleSkeleton() {
  return (
    <div className={`relative ${shimmer} h-12 w-72 bg-gray-600 my-4`}></div>
  )
}
export function DescriptionSkeleton() {
  return (
    <div className={`relative ${shimmer} mb-4`}>
      <div className="h-4 w-full bg-gray-600 mr-2"></div>
      <div className="h-4 w full bg-gray-600 mb-2"></div>
      <div className="h-4 w full bg-gray-600 mb-2"></div>
    </div>
  )
}
export default function HomePageSkeleton() {
  return (
    <div className="">
      <HeroSkeleton />
      <CardsSkeleton />
    </div>
  );
}
export function MediaSkeleton() {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-md bg-gray-900 p-4 shadow-sm`}
    >
      <div className={`${shimmer} h-64 w-[50%] bg-gray-700 p-2`}></div>
      <div className="mt-4 h-14 w-1/3 bg-gray-700"></div>
      <div className="mt-2 h-8 w-2/3 bg-gray-700"></div>
    </div>
  )
}
export function LectorSkeleton() {
  return (
    <div className={`${shimmer} relative w-full aspect-[16/9]`}>
      
    </div>
  )
}
export function PaginationSkeleton() {
  return (
    <div className={`${shimmer} relative h-16 w-64 bg-gray-600`}>
    </div>
  )
}
export function LoadingBar() {
  return (
    <div className={`${shimmer} fixed top-0 left-0 w-full h-3 bg-cyan-600 `}></div>
  )
}