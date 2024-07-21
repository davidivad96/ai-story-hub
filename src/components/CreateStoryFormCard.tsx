"use client";

import {
  CHARACTERS,
  GENRES,
  LANGUAGES,
  NARRATIVE_STYLES,
  SETTINGS,
  THEMES,
  TITLES,
  TONES,
} from "@/constants";
import { FormData } from "@/types";
import { getRandomElement } from "@/utils";
import { ShuffleIcon } from "@radix-ui/react-icons";
import { Button, Card, Container, Flex, Heading, Text } from "@radix-ui/themes";
import { useState } from "react";
import StoryCreationForm from "./StoryCreationForm";

const initialFormData: FormData = {
  title: "",
  genre: GENRES[0],
  theme: THEMES[0],
  setting: SETTINGS[0],
  character: CHARACTERS[0],
  narrativeStyle: NARRATIVE_STYLES[0],
  tone: TONES[0],
  language: LANGUAGES[0],
};

const CreateStoryFormCard: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const updateForm =
    <K extends keyof FormData>(key: K) =>
    (value: FormData[K]) => {
      setFormData((prev) => ({ ...prev, [key]: value }));
    };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const randomizeForm = () => {
    // Must use spread operator to convert readonly array to mutable array so that TypeScript doesn't complain
    setFormData({
      title: getRandomElement([...TITLES]),
      genre: getRandomElement([...GENRES]),
      theme: getRandomElement([...THEMES]),
      setting: getRandomElement([...SETTINGS]),
      character: getRandomElement([...CHARACTERS]),
      narrativeStyle: getRandomElement([...NARRATIVE_STYLES]),
      tone: getRandomElement([...TONES]),
      language: getRandomElement([...LANGUAGES]),
    });
  };

  return (
    <Container size="3">
      <Flex direction="column">
        <Flex justify="between" align="center" mb="4">
          <Heading>Create new story</Heading>
          <Button variant="surface" onClick={randomizeForm}>
            <Text className="hidden sm:inline-flex">Make it random</Text>{" "}
            <ShuffleIcon />
          </Button>
        </Flex>
        <Card className="p-4">
          <StoryCreationForm
            formData={formData}
            updateForm={updateForm}
            resetForm={resetForm}
          />
        </Card>
      </Flex>
    </Container>
  );
};

export default CreateStoryFormCard;
