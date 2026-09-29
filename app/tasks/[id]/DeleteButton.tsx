"use client";

import { Button } from "@/components/Button";

export default function DeleteButton({
  action,
}: {
  action: () => Promise<void>;
}) {
  return (
    <form
      action={action}
      onSubmit={(e) => {
        if (!confirm("Delete this task? This can't be undone."))
          e.preventDefault();
      }}
    >
      <Button type="submit" variant="danger">
        Delete
      </Button>
    </form>
  );
}
