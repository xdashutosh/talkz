import {React,useState,useEffect} from "react";
import {Box,Container,Input,VStack,Button,HStack} from "@chakra-ui/react";
import Message from "./components/Message";
import { GoogleAuthProvider,signOut,signInWithPopup,getAuth,onAuthStateChanged} from "firebase/auth"
import {app} from "./Firebase"
import {getFirestore,addDoc,collection, serverTimestamp, onSnapshot} from "firebase/firestore"



const auth =getAuth(app);

const db=getFirestore(app);

const loginhandler =()=>{
  const provider=new GoogleAuthProvider();
  signInWithPopup(auth,provider);
}
 const signouthandler=()=>{
signOut(auth);  
}

function App() {
const [useravail,setuseravail]=useState(false);
const [message,setmessage]=useState("");
const [messageArray,setmessageArray]=useState([]);
const submithandler= async(e)=>{
  e.preventDefault();
  try {
    await addDoc(collection(db,"Message"),{
      text:message,
      uid:useravail.uid,
      uri:useravail.photoURL,
      createdAt:serverTimestamp()
    });
    setmessage("");
  } catch (error) {
    alert(error);
  }
  }

useEffect(() => {
onAuthStateChanged(auth,(data)=>{
  setuseravail(data);
});

const unsubs=onSnapshot(collection(db,"Message"),(snap)=>{
  setmessageArray(
    snap.docs.map((item)=>{
      const id=item.id

      return {id,...item.data()};
    })
  )
},[]);
return()=>{
  unsubs();
}
})


const cleardata=()=>{
  setmessage("")
}
  return (
    <Box bg={"red.50"}>
          {
            useravail?( <Container h={"100vh"} bg={"white"}>
            <VStack h="full" paddingY={4}>
              <Button onClick={signouthandler} w={"full"} colorScheme={"red"} >
                Logout
              </Button>
    
          <VStack  h={"full"} w="full" overflowY="auto">
           {
            messageArray.map((item)=>(
              <Message 
              key={item.id}
              text={item.text}
              uri={item.uri}
              user={item.uri===item.uid?"me":"other" }
              />
            ))
           }
  
          </VStack>
    
          <form style={{width: "100%"}} onSubmit={submithandler} onChange={(e)=>setmessage(e.target.value)}>
            <HStack>
            <Input placeholder="Enter a message..."/>
            <Button type="submit" colorScheme={"purple"} onClick={cleardata}>Send</Button>
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
