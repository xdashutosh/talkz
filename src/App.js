import {React,useState,useEffect} from "react";
import {Box,Container,Input,VStack,Button,HStack} from "@chakra-ui/react";
import Message from "./components/Message";
import { GoogleAuthProvider,signOut,signInWithPopup,getAuth,onAuthStateChanged} from "firebase/auth"
import {app} from "./Firebase"
const auth =getAuth(app);

const loginhandler =()=>{
  const provider=new GoogleAuthProvider();
  signInWithPopup(auth,provider);
}
 const signouthandler=()=>{
signOut(auth);  
}

function App() {
const [useravail,setuseravail]=useState(false);
useEffect(() => {
onAuthStateChanged(auth,(data)=>{
  setuseravail(data);
})
})
  return (
    <Box bg={"red.50"}>
          {
            useravail?( <Container h={"100vh"} bg={"white"}>
            <VStack h="full" paddingY={4}>
              <Button onClick={signouthandler} w={"full"} colorScheme={"red"} >
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
          </Container>):<VStack h={"100vh"} w={"full"} justifyContent={"center"}> 
              <Button onClick={loginhandler} colorScheme={"purple"}>signIn With Google</Button>
              
          </VStack>
          }

    </Box>
  );
}

export default App;
