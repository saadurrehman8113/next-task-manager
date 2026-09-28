import { createTask } from "../actions";

export default function NewTaskPage() {
  return (
    <form action={createTask} className="flex gap-2">
      <input
        name="title"
        placeholder="Task title"
        required
        className="flex-1 rounded border px-3 py-2"
      />
      <button
        type="submit"
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Create
      </button>
    </form>
  );
}
