"use client";

import { TrashIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import { MouseEventHandler } from "react";
import { deleteStory } from "../actions";

type Props = {
  storyId: string;
};

const DeleteStoryButton: React.FC<Props> = ({ storyId }) => {
  const handleDelete: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.stopPropagation();
    await deleteStory(storyId);
  };

  return (
    <IconButton variant="ghost" onClick={handleDelete}>
      <TrashIcon />
    </IconButton>
  );
};

export default DeleteStoryButton;
