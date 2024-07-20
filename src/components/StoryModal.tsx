import { Button, Dialog, Tooltip } from "@radix-ui/themes";
import { useCompletion } from "ai/react";
import { useState } from "react";
import { saveStory } from "../actions";
import { FormData } from "../types";
import StoryModalContent from "./StoryModalContent";

type Props = {
  formData: FormData;
  disabled?: boolean;
  onComplete?: () => void;
};

const StoryModal: React.FC<Props> = ({
  formData,
  disabled = false,
  onComplete = () => {},
}) => {
  const { complete, completion, stop } = useCompletion({
    api: "/api/completion",
  });
  const [title, setTitle] = useState("");

  const handleGenerate = async () => {
    setTitle(formData.title);
    const response = await complete(`
      Tell me a story with the following parameters:
      - Genre: ${formData.genre}
      - Theme: ${formData.theme}
      - Setting: ${formData.setting}
      - Character: ${formData.character}
      - Narrative style: ${formData.narrativeStyle}
      - Tone: ${formData.tone}
      - Language: ${formData.language}
    `);
    if (response) {
      await saveStory(formData, response);
      onComplete();
    }
  };

  return (
    <Dialog.Root
      onOpenChange={(open) => {
        if (!open) stop();
      }}
    >
      <Dialog.Trigger>
        {disabled ? (
          <Tooltip content="Title is required">
            <Button variant="surface" disabled>
              Generate
            </Button>
          </Tooltip>
        ) : (
          <Button variant="surface" onClick={handleGenerate}>
            Generate
          </Button>
        )}
      </Dialog.Trigger>
      <StoryModalContent title={title} content={completion} />
    </Dialog.Root>
  );
};

export default StoryModal;
