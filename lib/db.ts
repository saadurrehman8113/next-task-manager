export type Task = { id: string; title: string; done: boolean };

// globalThis keeps data alive across dev hot-reloads
const g = globalThis as unknown as { tasks?: Task[] };
const tasks = (g.tasks ??= [{ id: "1", title: "Learn Next.js", done: false }]);

export const db = {
  list: async () => tasks,
  get: async (id: string) => tasks.find((t) => t.id === id) ?? null,
  create: async (title: string) => {
    tasks.push({ id: crypto.randomUUID(), title, done: false });
  },
  update: async (id: string, data: Partial<Omit<Task, "id">>) => {
    const t = tasks.find((t) => t.id === id);
    if (t) Object.assign(t, data);
  },
  remove: async (id: string) => {
    const i = tasks.findIndex((t) => t.id === id);
    if (i !== -1) tasks.splice(i, 1);
  },
};
