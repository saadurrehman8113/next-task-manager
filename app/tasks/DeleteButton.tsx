"use client";

export default function DeleteButton({
  action,
}: {
  action: () => Promise<void>;
}) {
  return (
    <form
      action={action}
      onSubmit={(e) => {
        if (!confirm("Delete this task?")) e.preventDefault();
      }}
    >
      <button
        type="submit"
        className="rounded bg-red-600 px-3 py-1.5 text-white hover:bg-red-700"
      >
        Delete
      </button>
    </form>
  );
}
