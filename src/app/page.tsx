"use client";

import { useCompletion } from "ai/react";
import { useState } from "react";
import {
  CHARACTERS,
  GENRES,
  LANGUAGES,
  NARRATIVE_STYLES,
  SETTINGS,
  THEMES,
  TONES,
} from "./constants";
import { Genre, Language, NarrativeStyle, Tone } from "./types";
import { getRandomElement } from "./utils";

type Form = {
  genre: Genre;
  theme: string;
  setting: string;
  character: string;
  narrativeStyle: NarrativeStyle;
  tone: Tone[];
  language: Language;
};

const StoryGenerator = () => {
  const { complete, completion } = useCompletion({ api: "/api/completion" });
  const [form, setForm] = useState<Form>({
    genre: getRandomElement(GENRES),
    theme: getRandomElement(THEMES),
    setting: getRandomElement(SETTINGS),
    character: getRandomElement(CHARACTERS),
    narrativeStyle: getRandomElement(NARRATIVE_STYLES),
    tone: [getRandomElement(TONES)],
    language: "Spanish",
  });

  const updateForm =
    <K extends keyof Form>(key: K) =>
    (value: Form[K]) => {
      setForm((prev) => ({ ...prev, [key]: value }));
    };

  return (
    <div className="flex flex-col justify-center">
      <select
        value={form.genre}
        onChange={(e) => updateForm("genre")(e.target.value as Genre)}
      >
        {GENRES.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Love and friendship"
        className="border border-gray-300"
        value={form.theme}
        onChange={(e) => updateForm("theme")(e.target.value)}
      />
      <input
        type="text"
        placeholder="A small village in the mountains"
        className="border border-gray-300"
        value={form.setting}
        onChange={(e) => updateForm("setting")(e.target.value)}
      />
      <input
        type="text"
        placeholder="A brave knight"
        className="border border-gray-300"
        value={form.character}
        onChange={(e) => updateForm("character")(e.target.value)}
      />
      <select
        value={form.narrativeStyle}
        onChange={(e) =>
          updateForm("narrativeStyle")(e.target.value as NarrativeStyle)
        }
      >
        {NARRATIVE_STYLES.map((narrativeStyle) => (
          <option key={narrativeStyle} value={narrativeStyle}>
            {narrativeStyle}
          </option>
        ))}
      </select>
      {TONES.map((tone) => (
        <label key={tone}>
          <input
            type="checkbox"
            checked={form.tone.includes(tone)}
            onChange={(e) => {
              if (e.target.checked) {
                updateForm("tone")([...form.tone, tone]);
              } else {
                updateForm("tone")(form.tone.filter((t) => t !== tone));
              }
            }}
            disabled={form.tone.length === 3 && !form.tone.includes(tone)}
          />
          {tone}
        </label>
      ))}
      <select
        value={form.language}
        onChange={(e) => updateForm("language")(e.target.value as Language)}
      >
        {LANGUAGES.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
      <button
        onClick={async () => {
          await complete(`
            Tell me a story with the following parameters:
            - Genre: ${form.genre}
            - Theme: ${form.theme}
            - Setting: ${form.setting}
            - Character: ${form.character}
            - Narrative style: ${form.narrativeStyle}
            - Tone: ${form.tone.join(", ")}
            - Language: ${form.language}
          `);
        }}
      >
        Submit
      </button>
      {completion}
    </div>
  );
};

export default StoryGenerator;
