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
    url: '/movie'
  },
  {
    name: 'TV Shows',
    url: '/movie'
  },
  {
    name: 'Terms of service',
    url: '/',
  },
  {
    name: 'Contact',
    url: '/',
  },
];

export default function Footer() {
  return (
    <footer className="md:flex md:justify-between md:items-center md:gap-4 flex-wrap bg-cyan-950 p-4 md:px-6 lg:px-8 xl:flex-nowrap mt-8">
      <Link href={'/'} className='flex flex-none grow-0 items-center justify-center font-bold text-slate-200 hover:text-cyan-400 text-lg'>
        <PlayCircleIcon className="h-8 w-8" />
        <span className='pl-2 block font-thin lowercase'>Alfamovies</span>
      </Link>
      <ul className='flex flex-initial shrink-0 divide-x-2 divide-slate-500 pt-4 md:py-0 justify-center'>
        {footerLinks.map((item: link) => {
          return (
            <li key={item.name} className='px-2'>
              <Link href={item.url} className='text-slate-500 capitalize text-md hover:text-slate-200'>{item.name}</Link>
            </li>
          );
        })}
      </ul>
      <p className='text-slate-300 flex-initial grow p-2 my:p-4 border-2 border-red-900 lg:w-max relative before:content-["**"] before:absolute before:top-0 before:right-0 before:text-red-600 before:text-2xl'>Alfamovies does not store any files on our server, we only link to the media which is hosted on 3rd party services.</p>
    </footer>
  );
}
/**
 * <iframe src="https://www.2embed.cc/embed/tt22041854" width="100%" height="100%" frameborder="0" scrolling="no" allowfullscreen></iframe>
 */
