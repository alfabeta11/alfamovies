'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div className="flex h-full flex-col items-center justify-center min-h-screen">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-cyan-600 px-4 py-2 text-sm text-white transition-colors hover:bg-cyan-400"
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}