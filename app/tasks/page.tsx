import Link from "next/link";
import { db } from "@/lib/db";
import { Card } from "@/components/Card";
import { LinkButton } from "@/components/Button";

export default async function TasksPage() {
  const tasks = await db.list();

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Tasks
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
          </p>
        </div>
        <LinkButton href="/tasks/new">+ New task</LinkButton>
      </div>

      {tasks.length === 0 ? (
        <Card className="flex flex-col items-center gap-3 px-6 py-16 text-center">
          <p className="text-sm font-medium text-gray-900">No tasks yet</p>
          <p className="text-sm text-gray-500">
            Create your first task to get started.
          </p>
          <LinkButton href="/tasks/new" className="mt-2">
            + New task
          </LinkButton>
        </Card>
      ) : (
        <Card className="divide-y divide-gray-100">
          {tasks.map((t) => (
            <Link
              key={t.id}
              href={`/tasks/${t.id}`}
              className="flex items-center justify-between px-5 py-4 transition-colors hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`h-2 w-2 rounded-full ${
                    t.done ? "bg-green-500" : "bg-gray-300"
                  }`}
                  aria-hidden
                />
                <span
                  className={`text-sm font-medium ${
                    t.done ? "text-gray-400 line-through" : "text-gray-900"
                  }`}
                >
                  {t.title}
                </span>
              </div>
              {t.done && (
                <span className="rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                  Done
                </span>
              )}
            </Link>
          ))}
        </Card>
      )}
    </div>
  );
}
