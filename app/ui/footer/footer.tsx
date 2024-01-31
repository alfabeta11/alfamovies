import Link from 'next/link';
import { PlayCircleIcon, StarIcon } from '@heroicons/react/24/solid';

export interface link {
  name: string;
  url: string;
}
const footerLinks = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Movies',
    url: '/movie',
  },
  {
    name: 'TV Shows',
    url: '/movie',
  },
  {
    name: 'Terms of service',
    url: '/',
  },
];

export default function Footer() {
  return (
    <footer className="mt-8 flex-wrap bg-cyan-950 p-4 md:flex md:items-center md:justify-between md:gap-4 md:px-6 lg:px-8 xl:flex-nowrap">
      <Link
        href={'/'}
        className="flex flex-none grow-0 items-center justify-center text-lg font-bold text-slate-200 hover:text-cyan-400"
      >
        <PlayCircleIcon className="h-8 w-8" />
        <span className="block pl-2 font-thin lowercase">Alfamovies</span>
      </Link>
      <ul className="flex flex-initial items-center shrink-0 justify-center divide-x-2 divide-slate-500 py-4 md:py-0">
        {footerLinks.map((item: link) => {
          return (
            <li key={item.name} className="px-2">
              <Link
                href={item.url}
                className="text-md capitalize text-slate-500 hover:text-slate-200"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <p className='my:p-4 relative flex-initial grow border-2 border-red-900 p-2 text-slate-300 before:absolute before:right-0 before:top-0 before:text-2xl before:text-red-600 before:content-["**"] lg:w-max'>
        Alfamovies does not store any files on our server, we only link to the
        media which is hosted on 3rd party services.
      </p>
    </footer>
  );
}
