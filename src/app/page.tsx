"use client";

import {
  Button,
  CheckboxGroup,
  Container,
  Flex,
  Select,
  Separator,
  TextField,
} from "@radix-ui/themes";
import { useCompletion } from "ai/react";
import { useState } from "react";
import LabeledContent from "./components/LabeledContent";
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

  const handleGenerate = async () => {
    await complete(`
      Tell me a story with the following parameters:
      - Genre: ${form.genre}
      - Theme: ${form.theme}
      - Setting: ${form.setting}
      - Character: ${form.character}
      - Narrative style: ${form.narrativeStyle}
      - Tone: ${form.tone.join(", ")}
    `);
  };

  return (
    <Container py="9">
      <Flex direction="column" gap="6">
        <Flex direction="row" justify="between" align="center">
          <LabeledContent label="Genre">
            <Select.Root
              value={form.genre}
              onValueChange={(val) => updateForm("genre")(val as Genre)}
            >
              <Select.Trigger />
              <Select.Content>
                {GENRES.map((genre) => (
                  <Select.Item key={genre} value={genre}>
                    {genre}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </LabeledContent>
          <Separator orientation="vertical" />
          <LabeledContent label="Theme">
            <TextField.Root
              placeholder="Love and friendship"
              value={form.theme}
              onChange={(e) => updateForm("theme")(e.target.value)}
            />
          </LabeledContent>
          <Separator orientation="vertical" />
          <LabeledContent label="Setting">
            <TextField.Root
              placeholder="A small village in the mountains"
              value={form.setting}
              onChange={(e) => updateForm("setting")(e.target.value)}
            />
          </LabeledContent>
          <Separator orientation="vertical" />
          <LabeledContent label="Character">
            <TextField.Root
              placeholder="A brave knight"
              value={form.character}
              onChange={(e) => updateForm("character")(e.target.value)}
            />
          </LabeledContent>
          <Separator orientation="vertical" />
          <LabeledContent label="Narrative style">
            <Select.Root
              value={form.narrativeStyle}
              onValueChange={(val) =>
                updateForm("narrativeStyle")(val as NarrativeStyle)
              }
            >
              <Select.Trigger />
              <Select.Content>
                {NARRATIVE_STYLES.map((narrativeStyle) => (
                  <Select.Item key={narrativeStyle} value={narrativeStyle}>
                    {narrativeStyle}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </LabeledContent>
        </Flex>
        <Flex direction="row" justify="between" align="center">
          <LabeledContent label="Tone">
            <CheckboxGroup.Root
              name="tones"
              onValueChange={(val) => {
                updateForm("tone")(val as Tone[]);
              }}
            >
              {TONES.map((tone) => (
                <CheckboxGroup.Item
                  key={tone}
                  value={tone}
                  disabled={form.tone.length === 3 && !form.tone.includes(tone)}
                >
                  {tone}
                </CheckboxGroup.Item>
              ))}
            </CheckboxGroup.Root>
          </LabeledContent>
          <LabeledContent label="Language">
            <Select.Root
              value={form.language}
              onValueChange={(val) => updateForm("language")(val as Language)}
            >
              <Select.Trigger />
              <Select.Content>
                {LANGUAGES.map((language) => (
                  <Select.Item key={language} value={language}>
                    {language}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </LabeledContent>
        </Flex>
        <Button onClick={handleGenerate}>Generate</Button>
        {completion}
      </Flex>
    </Container>
  );
};

export default StoryGenerator;
