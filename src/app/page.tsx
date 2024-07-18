import { Flex } from "@radix-ui/themes";
import CreateStoryFormCard from "./components/CreateStoryFormCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const Main = () => (
  <Flex direction="column" style={{ flex: 1 }}>
    <Header />
    <Flex p="4" gap="6" style={{ flex: 1 }}>
      <Sidebar />
      <CreateStoryFormCard />
    </Flex>
    <Footer />
  </Flex>
);

export default Main;
