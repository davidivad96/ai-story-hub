"use server";

import { FormData, Story } from "@/types";
import { kv } from "@vercel/kv";
import { generateId } from "ai";
import { revalidatePath } from "next/cache";
import { auth, signOut } from "./auth";
import { getKvKey } from "./utils";

export const saveStory = async (
  { title, genre, narrativeStyle, theme, language }: FormData,
  content: string
) => {
  const session = await auth();
  const id = generateId();
  await kv.hset<Story>(getKvKey(session?.user?.email ?? "guest"), {
    [id]: {
      id,
      title,
      genre,
      narrativeStyle,
      theme,
      language,
      content,
    },
  });
  revalidatePath("/");
};

export const deleteStory = async (storyId: string) => {
  const session = await auth();
  await kv.hdel(getKvKey(session?.user?.email ?? "guest"), storyId);
  revalidatePath("/");
};

export const logout = async () => {
  await signOut();
};
