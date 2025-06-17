// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

import { Box } from "@chakra-ui/react";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";
import { useState } from "react";

const ChatPage = () => {
  // const [chats,setChats]=useState([]);

  // const fetchChats=async()=>{
  //     const {data}=await axios.get('/api/chats');

  //     // console.log(data);
  //     setChats(data);

  // };

  // useEffect(()=>{
  //     fetchChats();
  // },[]);

  //   return (
  //     <div>
  //   {/* {chats.map((chat) => (
  //     <div key={chat._id}>
  //       {chat.chatName}
  //     </div>
  //   ))} */}
  // </div>
  //   )

  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        h="91.5h"
        p="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default ChatPage;
