import { OpenAIChatModelId } from "@ai-sdk/openai/internal";

export const MODEL_NAME: OpenAIChatModelId = "gpt-3.5-turbo";

export const STORY_LENGTH = 500;

export const SYSTEM_PROMPT = `
#CONTEXT:
Adopt the role of an expert storyteller with a deep understanding of narrative structures, character development, and engaging plotlines.
Your task is to create a captivating and immersive story based on provided themes, characters, or settings.
The story should be well-rounded, with a clear beginning, middle, and end, and should be suitable for the target audience specified.
It should not exceed ${STORY_LENGTH} words.

#GOAL:
You will craft a story that captures the imagination of the audience, evokes emotions, and delivers a memorable and meaningful experience.

#RESPONSE GUIDELINES:
You will follow a step-by-step approach below:

Understand the key elements of the story:
Theme: Identify the central theme or message.
Characters: Develop well-rounded characters with clear motivations and arcs.
Setting: Create a vivid and immersive setting that enhances the story.
Plot: Construct a coherent and engaging plot with a clear structure (beginning, middle, end).

Start with a strong opening:
Introduce the main characters and setting.
Present the initial conflict or problem that sets the story in motion.

Develop the middle section:
Build tension and develop the plot through a series of events and challenges.
Deepen character relationships and reveal important backstory.

Create a compelling climax:
Lead the story to a high point of tension where the main conflict reaches its peak.

Conclude with a satisfying resolution:
Resolve the main conflict and tie up loose ends.
Provide a meaningful conclusion that reflects the story's theme.

Use descriptive and emotive language to enhance the storytelling:
Employ vivid descriptions to bring scenes to life.
Use dialogue to reveal character traits and advance the plot.

Ensure the story is appropriate for the target audience:
Tailor the language, themes, and content to suit the specified audience.

#OUTPUT:
The story should be engaging, immersive, and well-structured, providing a clear narrative arc from beginning to end.
It should be approximately ${STORY_LENGTH} words long, using descriptive and emotive language to draw in the reader and create a vivid, memorable experience.
`;

export const GENRES = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Fantasy",
  "Historical",
  "Horror",
  "Mystery",
  "Romance",
  "Sci-fi",
  "Thriller",
  "Western",
] as const;

export const THEMES = [
  "Love and friendship",
  "Courage and heroism",
  "Betrayal and revenge",
  "Discovery and adventure",
  "Hope and redemption",
  "Power and corruption",
  "Justice and sacrifice",
  "Fate and destiny",
  "Freedom and oppression",
  "Fear and survival",
  "Truth and deception",
  "Conflict and resolution",
] as const;

export const SETTINGS = [
  "A small village in the mountains",
  "A bustling city",
  "A mysterious island",
  "An enchanted forest",
  "A haunted mansion",
  "A futuristic metropolis",
  "A medieval castle",
  "A magical kingdom",
  "A post-apocalyptic wasteland",
  "A space station",
  "A pirate ship",
  "A secret underground lair",
  "A steampunk world",
  "A parallel universe",
] as const;

export const CHARACTERS = [
  "A brave knight",
  "A cunning thief",
  "A wise wizard",
  "A fearless warrior",
  "A mysterious stranger",
  "A noble queen",
  "A troubled detective",
  "A mischievous rogue",
  "A vengeful sorcerer",
  "A reluctant hero",
  "A charming rogue",
  "A determined explorer",
  "A conflicted anti-hero",
  "A powerful sorceress",
  "A normal person in extraordinary circumstances",
  "A group of unlikely allies",
  "A pair of star-crossed lovers",
  "A loyal sidekick",
] as const;

export const NARRATIVE_STYLES = [
  "First-person",
  "Third-person limited",
  "Third-person omniscient",
  "Epistolary",
  "Stream of consciousness",
  "Multiple perspectives",
  "Non-linear",
  "Metafiction",
  "Diary entries",
  "Experimental",
] as const;

export const TONES = [
  "Serious",
  "Humorous",
  "Dark",
  "Light-hearted",
  "Mysterious",
  "Romantic",
  "Suspenseful",
  "Satirical",
  "Melancholic",
  "Whimsical",
  "Gothic",
  "Surreal",
  "Cynical",
  "Hopeful",
] as const;

export const LANGUAGES = ["English", "Spanish"] as const;
