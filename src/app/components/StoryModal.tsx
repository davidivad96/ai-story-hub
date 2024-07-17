import { Cross1Icon } from "@radix-ui/react-icons";
import { Button, Dialog, IconButton, Tooltip } from "@radix-ui/themes";
import { useCompletion } from "ai/react";
import { FormData } from "../types";

type Props = {
  formData: FormData;
  disabled?: boolean;
};

const StoryModal: React.FC<Props> = ({ formData, disabled = false }) => {
  const { complete, completion } = useCompletion({ api: "/api/completion" });

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
    console.log(response);
  };

  return (
    <Dialog.Root>
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
      <Dialog.Content maxWidth="800px">
        <Dialog.Close style={{ float: "right" }}>
          <IconButton variant="ghost">
            <Cross1Icon />
          </IconButton>
        </Dialog.Close>
        <Dialog.Title>{formData.title}</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          {completion}
        </Dialog.Description>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default StoryModal;
