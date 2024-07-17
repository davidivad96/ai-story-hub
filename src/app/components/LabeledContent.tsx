import { Flex, Text } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  label: string;
};

const LabeledContent: React.FC<Props> = ({ label, children }) => (
  <Flex direction="row" align="center" gap="2">
    <Text as="label" size="1" weight="bold" color="gray">
      {label}:
    </Text>
    {children}
  </Flex>
);

export default LabeledContent;
