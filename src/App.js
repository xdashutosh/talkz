import React from "react";
import {Box,Container,Input,VStack,Button,HStack} from "@chakra-ui/react";
import Message from "./components/Message";
function App() {
  return (
    <Box bg={"red.50"}>
      <Container h={"100vh"} bg={"white"}>
        <VStack h="full" paddingY={4}>
          <Button className="btn" w={"full"} colorScheme={"red"}>
            Logout
          </Button>

      <VStack  h={"full"} w="full" overflowY="auto">
        <Message text="hey ashu" user="other"/>
        <Message text="hey abhi " user="me" />
        <Message text="hey abhi " user="me" />
        <Message text="hey ashu" user="other"/>
        <Message text="hey ashu" user="other"/>
        <Message text="hey abhi " user="me" />
        <Message text="hey abhi " user="me" />
        <Message text="hey ashu" user="other"/>
        <Message text="hey abhi " user="me" />
        <Message text="hey ashu" user="other"/>
        <Message text="hey abhi " user="me" />
        <Message text="hey abhi " user="me" />
        <Message text="hey ashu" user="other"/>
        <Message text="hey ashu" user="other"/>
        <Message text="hey ashu" user="other"/>
        <Message text="hey ashu" user="other"/>
        <Message text="hey abhi " user="me" />
        <Message text="hey abhi " user="me" />
      </VStack>

      <form style={{width: "100%"}}>
        <HStack>
        <Input placeholder="Enter a message..."/>
        <Button type="submit" colorScheme={"purple"}>Send</Button>
        </HStack>
      </form>

        </VStack>
      </Container>
    </Box>
  );
}

export default App;
