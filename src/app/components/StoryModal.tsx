import { Button, Dialog, Tooltip } from "@radix-ui/themes";
import { useCompletion } from "ai/react";
import { saveStory } from "../actions";
import { FormData } from "../types";
import StoryModalContent from "./StoryModalContent";

type Props = {
  formData: FormData;
  disabled?: boolean;
};

const StoryModal: React.FC<Props> = ({ formData, disabled = false }) => {
  const { complete, completion, stop } = useCompletion({
    api: "/api/completion",
  });

  const handleGenerate = async () => {
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
    await saveStory(formData, response ?? "");
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
            <Button variant="outline" disabled>
              Generate
            </Button>
          </Tooltip>
        ) : (
          <Button variant="outline" onClick={handleGenerate}>
            Generate
          </Button>
        )}
      </Dialog.Trigger>
      <StoryModalContent title={formData.title} content={completion} />
    </Dialog.Root>
  );
};

export default StoryModal;
