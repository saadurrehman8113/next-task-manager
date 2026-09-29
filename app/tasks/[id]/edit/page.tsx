import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { updateTask } from "../../actions";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export default async function EditTaskPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const task = await db.get(id);
  if (!task) notFound();

  return (
    <Card className="p-6">
      <h1 className="mb-6 text-lg font-bold text-gray-900">Edit task</h1>
      <form
        action={updateTask.bind(null, task.id)}
        className="flex flex-col gap-5"
      >
        <div>
          <label
            htmlFor="title"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            id="title"
            name="title"
            defaultValue={task.title}
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900
                       placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none
                       focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>
        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            name="done"
            defaultChecked={task.done}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500/30"
          />
          Mark as done
        </label>
        <div className="flex gap-3 border-t border-gray-100 pt-4">
          <Button type="submit">Save changes</Button>
        </div>
      </form>
    </Card>
  );
}
