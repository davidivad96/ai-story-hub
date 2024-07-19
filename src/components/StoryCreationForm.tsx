"use client";

import {
  CHARACTERS,
  GENRES,
  LANGUAGES,
  NARRATIVE_STYLES,
  SETTINGS,
  THEMES,
  TONES,
} from "@/constants";
import { FormData, Genre, Language, NarrativeStyle, Tone } from "@/types";
import { Flex, Select, TextArea, TextField } from "@radix-ui/themes";
import { useState } from "react";
import LabeledContent from "./LabeledContent";
import StoryModal from "./StoryModal";

const StoryCreationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    genre: GENRES[0],
    theme: THEMES[0],
    setting: SETTINGS[0],
    character: CHARACTERS[0],
    narrativeStyle: NARRATIVE_STYLES[0],
    tone: TONES[0],
    language: LANGUAGES[0],
  });

  const updateForm =
    <K extends keyof FormData>(key: K) =>
    (value: FormData[K]) => {
      setFormData((prev) => ({ ...prev, [key]: value }));
    };

  return (
    <Flex direction="column" gap="4">
      <LabeledContent label="Title">
        <TextField.Root
          placeholder="My awesome story"
          value={formData.title}
          onChange={(e) => updateForm("title")(e.target.value)}
        />
      </LabeledContent>
      <Flex gap="4">
        <LabeledContent label="Genre">
          <Select.Root
            value={formData.genre}
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
        <LabeledContent label="Narrative style">
          <Select.Root
            value={formData.narrativeStyle}
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
        <LabeledContent label="Tone">
          <Select.Root
            value={formData.tone}
            onValueChange={(val) => updateForm("tone")(val as Tone)}
          >
            <Select.Trigger />
            <Select.Content>
              {TONES.map((tone) => (
                <Select.Item key={tone} value={tone}>
                  {tone}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </LabeledContent>
        <LabeledContent label="Language">
          <Select.Root
            value={formData.language}
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
      <LabeledContent label="Theme">
        <TextField.Root
          placeholder="Love and friendship"
          value={formData.theme}
          onChange={(e) => updateForm("theme")(e.target.value)}
        />
      </LabeledContent>
      <LabeledContent label="Character">
        <TextField.Root
          placeholder="A brave knight"
          value={formData.character}
          onChange={(e) => updateForm("character")(e.target.value)}
        />
      </LabeledContent>
      <LabeledContent label="Setting">
        <TextArea
          placeholder="A small village in the mountains"
          value={formData.setting}
          onChange={(e) => updateForm("setting")(e.target.value)}
        />
      </LabeledContent>
      <StoryModal formData={formData} disabled={!formData.title} />
    </Flex>
  );
};

export default StoryCreationForm;
