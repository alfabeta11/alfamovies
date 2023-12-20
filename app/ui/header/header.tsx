'use server'; 

import { PlayIcon, UserIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Nav from './nav';
import Search from './search';

export default async function Header( ) {
  // console.log(result);
  return (
    <header className="z-10 mb-4 flex w-full flex-wrap items-center justify-between bg-transparent pb-0 pt-4 lg:flex-nowrap">
      <Link href="/" className="group order-2 h-12 w-12 lg:order-1">
        <PlayIcon className="h-full w-full text-cyan-400 group-hover:text-cyan-500" />
      </Link>
      <Nav />
      {/* <div className="order-3 flex items-center gap-2 lg:order-4">
        <UserIcon className="h-8 w-8 hover:text-cyan-400" />
        <span className="hidden lg:block">Login</span>
      </div> */}
      <div className="order-4 mt-4 basis-full lg:order-3 lg:mt-0 lg:basis-auto">
        <Search />
      </div>
    </header>
  );
}