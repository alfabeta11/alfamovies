'use client';

import { generatePagination } from '@/app/lib/utils';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from 'clsx';

export default function Pagination({ totalPages }: { totalPages: number }) {
  const searchparams = useSearchParams();
  const pathname = usePathname();
  const currentPage = Number(searchparams.get('page')) || 1;

  const allPages = generatePagination(currentPage, totalPages);
  // console.log(allPages);
  function createPage(pageNumber: number | string) {
    // We need to be able take the number add it to url params and set pathname
    const params = new URLSearchParams(searchparams);
    params.set('page', `${pageNumber}`);
    return `${pathname}?${params.toString()}`;
  }
  return (
    <nav className="wrap-0 flex w-full shrink-0 grow-0 items-center justify-center">
      <ul className="flex items-center">
        <BigPaginationIcon
          direction="first"
          isDisabled={currentPage == 1}
          href={createPage(1)}
        />
        <PaginationArrow
          direction="left"
          isDisabled={currentPage == 1}
          href={createPage(currentPage - 1)}
        />
        {allPages.map((page, index) => {
          let position: 'first' | 'last' | 'single' | 'middle' | undefined;

          if (index === 0) position = 'first';
          if (index === allPages.length - 1) position = 'last';
          if (allPages.length === 1) position = 'single';
          if (page === '...') position = 'middle';

          return (
            <PaginationNumber
              key={index}
              page={page}
              position={position}
              href={createPage(page)}
              isActive={page == currentPage}
            />
          );
        })}
        <PaginationArrow
          direction="right"
          isDisabled={currentPage == allPages.length}
          href={createPage(currentPage + 1)}
        />
        <BigPaginationIcon
          direction="last"
          isDisabled={currentPage == totalPages}
          href={createPage(totalPages)}
        />
      </ul>
    </nav>
  );
}

export function PaginationNumber({
  page,
  position,
  href,
  isActive,
}: {
  page: number | string;
  position?: 'first' | 'single' | 'middle' | 'last';
  href: string;
  isActive: boolean;
}) {
  const className = clsx(
    'flex h-10 w-10 items-center justify-center text-sm mx-1 transition-colors duration-300',
    {
      'rounded-l-md': position === 'first' || position === 'single',
      'rounded-r-md': position === 'last' || position === 'single',
      'z-10 bg-cyan-400 text-slate-900 scale-110 hover:bg-cyan-300': isActive,
      'bg-cyan-800 hover:bg-cyan-500': !isActive && position !== 'middle',
      'text-gray-300 bg-slate-800': position === 'middle',
    },
  );

  return isActive || position === 'middle' ? (
    <li className={className}>{page}</li>
  ) : (
    <li>
      <Link href={href} className={className}>
        {page}
      </Link>
    </li>
  );
}

function PaginationArrow({
  direction,
  href,
  isDisabled,
}: {
  direction: 'left' | 'right';
  href: string;
  isDisabled: boolean;
}) {
  const className = clsx(
    'flex h-6 w-6 items-center justify-center text-sm mx-1 transition-colors duration-300 mx-2',
    {
      'text-gray-700': isDisabled,
      ' hover:text-cyan-400': !isDisabled,
    },
  );
  const icon =
    direction === 'left' ? (
      <ArrowLongLeftIcon className="w-4" />
    ) : (
      <ArrowLongRightIcon className="w-4" />
    );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  );
}

function BigPaginationIcon({
  direction,
  href,
  isDisabled,
}: {
  direction: 'first' | 'last';
  href: string;
  isDisabled: boolean;
}) {
  const className = clsx(
    'flex h-6 w-6 items-center justify-center text-sm mx-1 transition-colors duration-300 mx-2',
    {
      'text-gray-700': isDisabled,
      ' hover:text-cyan-400': !isDisabled,
    },
  );
  const icon =
    direction === 'first' ? (
      <ChevronDoubleLeftIcon className="w-4" />
    ) : (
      <ChevronDoubleRightIcon className="w-4" />
    );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  );
}
