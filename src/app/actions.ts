"use server";

import { kv } from "@vercel/kv";
import { generateId } from "ai";
import { revalidatePath } from "next/cache";
import { FormData, Story } from "./types";

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
