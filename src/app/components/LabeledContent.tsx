import { Box, Heading } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  label: string;
};

const LabeledContent: React.FC<Props> = ({ label, children }) => (
  <Box>
    <Heading size="2" mb="2">
      {label}
    </Heading>
    {children}
  </Box>
);

export default LabeledContent;
