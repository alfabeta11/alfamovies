import Link from "next/link";
import { PlayCircleIcon } from "@heroicons/react/24/outline";

// call to action button
export default function CTA({ url }: { url: string }) {
    return (
      <div className="flex-column mt-8 w-full items-center justify-center self-center md:flex md:max-w-max">
        <Link
          href={url}
          className="mx-auto mb-3 flex w-full max-w-xs items-center justify-between rounded-md bg-gradient-to-r from-green-500 to-green-900 px-8 py-4 text-xl transition duration-700 last:mb-0 hover:bg-gradient-to-l md:mx-4 md:my-0 md:w-64 md:first:ml-0"
        >
          <span>Play now</span>
          <PlayCircleIcon className="text-white-200 h-8 w-8" />
        </Link>
      </div>
    );
  }