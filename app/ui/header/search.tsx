'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { handleSearch } from '@/app/lib/actions';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useDebouncedCallback } from 'use-debounce';

export default function Search() {
  const searchparams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleChange = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchparams);

    if (value) {
      params.set('query', value);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <form action={handleSearch} className="relative">
      <input
        type="text"
        placeholder="Enter keyword..."
        className="peer w-full rounded-md
				border-transparent bg-slate-800 py-2 pl-8 placeholder:text-slate-500 hover:border-slate-500 focus:border-slate-200 focus:ring-0"
        defaultValue={searchparams.get('query')?.toString()}
        autoComplete="off"
        name="query"
        onChange={(event) => handleChange(event.target.value)}
        required
      />
      <MagnifyingGlassIcon className="absolute inset-1/2 left-2 h-6 w-6 -translate-y-1/2 bg-transparent text-slate-600 peer-hover:text-slate-300 peer-focus:text-slate-300" />
    </form>
  );
}
