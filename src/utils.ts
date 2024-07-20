export const getNameInitials = (name: string) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

export const getKvKey = (key: string) => `stories:${key}`;
