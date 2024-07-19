import CreateStoryFormCard from "@/components/CreateStoryFormCard";
import Sidebar from "@/components/Sidebar";
import { Flex } from "@radix-ui/themes";

const Main = async () => (
  <Flex p="4" gap="6">
    <Sidebar />
    <CreateStoryFormCard />
  </Flex>
);

export default Main;
