"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

export async function createTask(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  if (!title) throw new Error("Title is required");
  await db.create(title);
  revalidatePath("/tasks"); // refresh cached data for the list
  redirect("/tasks"); // note: redirect works by throwing, so don't wrap it in try/catch
}

export async function updateTask(id: string, formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const done = formData.get("done") === "on";
  await db.update(id, { title, done });
  revalidatePath("/tasks");
  redirect(`/tasks/${id}`);
}

export async function deleteTask(id: string) {
  await db.remove(id);
  revalidatePath("/tasks");
  redirect("/tasks");
}
