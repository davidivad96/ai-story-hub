import { GENRES, LANGUAGES, NARRATIVE_STYLES, TONES } from "@/constants";

export type Genre = (typeof GENRES)[number];

export type NarrativeStyle = (typeof NARRATIVE_STYLES)[number];

export type Tone = (typeof TONES)[number];

export type Language = (typeof LANGUAGES)[number];

export type FormData = {
  title: string;
  genre: Genre;
  theme: string;
  setting: string;
  character: string;
  narrativeStyle: NarrativeStyle;
  tone: Tone;
  language: Language;
};

export type Story = Pick<
  FormData,
  "title" | "genre" | "narrativeStyle" | "theme" | "language"
> & {
  id: string;
  content: string;
};
