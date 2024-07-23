import { getAllStories } from "@/actions";
import { auth } from "@/auth";
import { Card, Flex, Heading } from "@radix-ui/themes";
import StoriesList from "./StoriesList";

const Sidebar: React.FC = async () => {
  const session = await auth();
  const stories = await getAllStories();

  return (
    <Card className="p-4 w-72 hidden sm:block">
      <Flex direction="column" height="100%">
        <Heading mb="4">{session ? "Your Stories" : "Guest Stories"}</Heading>
        <StoriesList stories={stories} canDelete={!!session} />
      </Flex>
    </Card>
  );
};

export default Sidebar;
