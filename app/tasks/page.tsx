import Link from "next/link";
import { db } from "@/lib/db";
import DeleteButton from "./DeleteButton";
import { deleteTask } from "./actions";

export default async function TasksPage() {
  const tasks = await db.list();
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <Link
          href="/tasks/new"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-700"
        >
          + New task
        </Link>
        // inside the JSX of TaskPage:
        <DeleteButton action={deleteTask.bind(null, task.id)} />
      </div>
      <ul className="divide-y rounded border bg-white">
        {tasks.map((t) => (
          <li
            key={t.id}
            className="flex items-center justify-between px-4 py-3"
          >
            <Link href={`/tasks/${t.id}`} className="hover:underline">
              {t.title}
            </Link>
            {t.done && <span className="text-sm text-green-600">Done</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
