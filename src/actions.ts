"use server";

import { FormData, Story } from "@/types";
import { kv } from "@vercel/kv";
import { generateId } from "ai";
import { revalidatePath } from "next/cache";
import { signOut } from "./auth";

export const saveStory = async (
  { title, genre, narrativeStyle, theme, language }: FormData,
  content: string
) => {
  const id = generateId();
  await kv.hset<Story>("stories", {
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
  await kv.hdel("stories", storyId);
  revalidatePath("/");
};

export const logout = async () => {
  await signOut();
};
