import { Card, Container, Flex, Heading } from "@radix-ui/themes";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const Main = () => (
  <Flex direction="column" style={{ flex: 1 }}>
    <Header />
    <Flex p="4" gap="6" style={{ flex: 1 }}>
      <Sidebar />
      <Container size="3">
        <Flex direction="column">
          <Heading mb="4">Create your story</Heading>
          <Card style={{ padding: 16 }}>
            <Form />
          </Card>
        </Flex>
      </Container>
    </Flex>
    <Footer />
  </Flex>
);

export default Main;
