import { MODEL_NAME, SYSTEM_PROMPT } from "@/constants";
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export const POST = async (req: Request) => {
  const { prompt } = (await req.json()) as { prompt?: string };
  const result = await streamText({
    model: openai(MODEL_NAME),
    prompt,
    system: SYSTEM_PROMPT,
  });
  return result.toAIStreamResponse();
};
