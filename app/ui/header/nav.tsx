'use client';

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { DropdownItem } from "@/app/lib/definitions";
import { genres } from '../../lib/data';

const navlist = [
    { url: '/', name: 'Home' },
    // { url: '/', name: 'Genres', hasDropdown: true, dropdownContent: genres },
    {
      url: '/movie',
      name: 'Movies',
    },
    { url: '/tv', name: 'TV Shows' },
    { url: '/topimdb', name: 'Top Imdb' },
  ];

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  function handleClick() {
    setNavOpen(!navOpen);
  }

  return (
    <div className="order-1 flex items-center lg:order-2">
      <NavList className="hidden grow items-center justify-center lg:flex" />
      <Bars3Icon
        className="h-8 w-8 cursor-pointer lg:hidden"
        onClick={handleClick}
      />
      <div
        className={clsx(
          'z-90 absolute left-0 top-0 z-30 h-full w-max bg-slate-900',
          {
            block: navOpen,
            hidden: !navOpen,
          },
        )}
      >
        <div className="relative h-full w-full max-w-[350px] bg-slate-950 p-4 opacity-100 md:w-80">
          <XMarkIcon
            className="mb-8 h-8 w-8 cursor-pointer"
            onClick={handleClick}
          />
          <NavList className="flex-column w-full" />
        </div>
      </div>
    </div>
  );
}

export function NavList({ className }: { className: string }) {
  return (
    <ul className={className}>
      {navlist.map((item) => {
        return (
          <NavItem
            key={item.name}
            url={item.url}
            name={item.name}
            // hasDropdown={item?.hasDropdown}
            // dropdownContent={item?.dropdownContent}
          />
        );
      })}
    </ul>
  );
}

export function NavItem({
  url,
  name,
  hasDropdown,
  dropdownContent,
}: {
  url: string;
  name: string;
  hasDropdown?: boolean;
  dropdownContent?: DropdownItem[];
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <li className="group relative w-full items-center lg:flex">
      <Link
        href={url}
        className="block flex min-w-max rounded-md bg-transparent px-6 py-3 capitalize text-cyan-50 transition duration-300 ease-in-out hover:bg-cyan-950 hover:text-cyan-400 md:text-lg"
        onClick={(event) => {
          if (hasDropdown) {
            event.preventDefault();
            setDropdownOpen(!dropdownOpen);
          }
        }}
      >
        {name}
        {hasDropdown && !dropdownOpen && (
          <ChevronDownIcon className="h-inherit ml-1 block w-4 text-cyan-100 group-hover:text-cyan-400" />
        )}
        {hasDropdown && dropdownOpen && (
          <ChevronUpIcon className="h-inherit ml-1 block w-4 text-cyan-100 group-hover:text-cyan-400" />
        )}
      </Link>
      {dropdownOpen && (
        <DropdownContent
          items={dropdownContent}
          className="left-0 top-[100%] z-10 lg:absolute"
        />
      )}
    </li>
  );
}

export function DropdownContent({
  items,
  className,
}: {
  items?: DropdownItem[];
  className: string;
}) {
  return (
    <div className={className}>
      <div className="grid max-h-80 grid-cols-1 overflow-y-auto rounded-lg bg-cyan-950 p-2 lg:max-h-80 lg:w-max lg:grid-cols-3 lg:rounded-md">
        {items?.map((item) => {
          return (
            <Link
              key={item.id}
              href="/"
              className="mx-2 rounded-md px-2 py-2 hover:bg-cyan-900 hover:text-cyan-400 "
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
