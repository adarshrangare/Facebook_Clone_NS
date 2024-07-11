"use client";

import {  useRouter } from "next/navigation";
import { useEffect } from "react";

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
  const router = useRouter()
  return (
    <main className="flex h-full flex-col items-center justify-center min-h-screen">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-500"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => {
            // reset()
            router.replace("/");
            window.location.reload();
        }
        }
      >
        Try again
      </button>
    </main>
  );
}
