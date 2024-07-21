import CreateStoryFormCard from "@/components/CreateStoryFormCard";
import Sidebar from "@/components/Sidebar";
import { Flex } from "@radix-ui/themes";

const Main = async () => (
  <Flex
    p="4"
    gap="6"
    className="bg-background-secondary"
    style={{ height: "calc(100vh - 116px)" }}
  >
    <Sidebar />
    <CreateStoryFormCard />
  </Flex>
);

export default Main;
