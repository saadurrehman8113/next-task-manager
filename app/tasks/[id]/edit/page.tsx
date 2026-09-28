import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { updateTask } from "../../actions";

export default async function EditTaskPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const task = await db.get(id);
  if (!task) notFound();

  return (
    <form action={updateTask.bind(null, task.id)}>
      <input name="title" defaultValue={task.title} required />
      <label>
        <input type="checkbox" name="done" defaultChecked={task.done} /> Done
      </label>
      <button type="submit">Save</button>
    </form>
  );
}
