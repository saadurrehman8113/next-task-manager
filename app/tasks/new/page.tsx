import { createTask } from "../actions";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export default function NewTaskPage() {
  return (
    <Card className="p-6">
      <h1 className="mb-6 text-lg font-bold text-gray-900">New task</h1>
      <form action={createTask} className="flex flex-col gap-5">
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
            placeholder="e.g. Write project proposal"
            required
            autoFocus
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900
                       placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none
                       focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>
        <div className="flex gap-3 border-t border-gray-100 pt-4">
          <Button type="submit">Create task</Button>
        </div>
      </form>
    </Card>
  );
}
