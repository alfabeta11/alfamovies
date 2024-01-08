'use client';

import clsx from 'clsx';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function Buttons() {
  const searchparams = useSearchParams();
  const { push } = useRouter();
  const pathname = usePathname();
  const [isActive, setActive] = useState(true);

  function createPage(type: string) {
    const params = new URLSearchParams(searchparams);
    params.set('type', type);
    params.delete('page');
    return `${pathname}?${params.toString()}`;
  }

  return (
    <div className="flex gap-2">
      <Link
        href={createPage('movie')}
        className={clsx(
          'flex items-center gap-2 rounded-md border-2 border-cyan-400 px-4 py-2',
          {
            'bg-cyan-400 text-cyan-950 hover:bg-cyan-950 hover:text-cyan-400':
              isActive,
            'bg-cyan-950 text-cyan-400 hover:bg-cyan-400 hover:text-cyan-950':
              !isActive,
          },
        )}
      >
        Movies
        <ArrowRightCircleIcon className="h-4 w-4" />
      </Link>
      <Link
        href={createPage('tv')}
        className="flex items-center gap-2 rounded-md border-2 border-cyan-400 bg-cyan-400 px-4 py-2 text-cyan-950 hover:bg-cyan-950 hover:text-cyan-400"
      >
        TV Shows
        <ArrowRightCircleIcon className="h-4 w-4" />
      </Link>
    </div>
  );
}
