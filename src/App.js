import Main from "./components/Main";
import { Container, Flex } from "bumbag";

function App() {
  return (
    <Container paddingY="major-2">
      <Flex alignX="center" alignY="center">
        <Main />
      </Flex>
    </Container>
  );
}

export default App;
