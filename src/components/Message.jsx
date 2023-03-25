import React from 'react'
import {HStack,Avatar,Text} from "@chakra-ui/react"
export default function Message({text,user,uri}) {
  return (
    <HStack alignSelf={user==="me"?"flex-end":"flex-start"} bg={"gray.200"} paddingX={3} paddingY={1} borderRadius={"base"} >
        {
            user==="other"?<Avatar uri={uri}/>:""

        }
        <Text>{text}</Text>
        {
            user==="me"?<Avatar/>:""
        }
    </HStack>
  )
}
