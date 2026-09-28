import { notFound } from "next/navigation";
import Link from "next/link";
import { db } from "@/lib/db";

export default async function TaskPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // params is a Promise in recent versions
  const task = await db.get(id);
  if (!task) notFound();

  return (
    <div>
      <h1>{task.title}</h1>
      <p>Status: {task.done ? "Done" : "Open"}</p>
      <Link href={`/tasks/${task.id}/edit`}>Edit</Link>
    </div>
  );
}
