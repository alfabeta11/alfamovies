import { StarIcon } from '@heroicons/react/24/outline';

export function DateAndRating({
    date,
    rating,
  }: {
    date: string;
    rating: string;
  }) {
    return (
      <div className="flex items-center justify-center divide-x md:max-w-max">
        <span className="pr-3 text-slate-400">{date}</span>
        <span className="flex items-center justify-center pl-3">
          <StarIcon className="h-6 w-6 gap-2" />
          <span>{Number.parseFloat(rating).toFixed(2)}</span>
        </span>
      </div>
    );
  }