"use client";

import { Button } from "@/components/Button";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="rounded-xl border border-red-100 bg-red-50 p-6 text-center">
      <p className="text-sm font-medium text-red-800">Something went wrong.</p>
      <p className="mt-1 text-sm text-red-600">Please try again.</p>
      <Button onClick={reset} variant="danger" className="mt-4">
        Try again
      </Button>
    </div>
  );
}
