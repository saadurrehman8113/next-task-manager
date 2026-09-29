import { notFound } from "next/navigation";
import Link from "next/link";
import { db } from "@/lib/db";
import { deleteTask } from "../actions";
import { Card } from "@/components/Card";
import { LinkButton } from "@/components/Button";
import DeleteButton from "./DeleteButton";

export default async function TaskPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const task = await db.get(id);
  if (!task) notFound();

  return (
    <div>
      <Link
        href="/tasks"
        className="mb-4 inline-flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-gray-900"
      >
        ← Back to tasks
      </Link>
      <Card className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-xl font-bold text-gray-900">{task.title}</h1>
          <span
            className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
              task.done
                ? "bg-green-50 text-green-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {task.done ? "Done" : "Open"}
          </span>
        </div>
        <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-4">
          <LinkButton href={`/tasks/${task.id}/edit`} variant="secondary">
            Edit
          </LinkButton>
          <DeleteButton action={deleteTask.bind(null, task.id)} />
        </div>
      </Card>
    </div>
  );
}
