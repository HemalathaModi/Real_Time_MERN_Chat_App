import React, { useEffect } from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);
  return (
    <div>
      <Container maxW={"xl"} centerContent>
        <Box
          d={"flex"}
          justifyContent={"center"}
          p={"2"}
          bg={"white"}
          w="100%"
          m={"20px 0 10px 0"}
          borderRadius={"100px"}
          borderWidth={"1px"}
        >
          <Text fontSize={"3xl"} textAlign={"center"}>
            talk-a-tive
          </Text>
        </Box>

        <Box
          bg={"white"}
          w={"100%"}
          p={"4"}
          borderRadius={"50px"}
          borderWidth={"1 px"}
        >
          <Tabs isFitted variant={"soft-rounded"}>
            <TabList>
              <Tab>Login</Tab>
              <Tab>Signup</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </div>
  );
};

export default HomePage;
