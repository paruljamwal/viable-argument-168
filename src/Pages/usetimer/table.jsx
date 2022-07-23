import { Stack, Box, Flex } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Tab, Tabs,
  TabList
} from '@chakra-ui/react'

import { useState } from "react";
import Timer from "./Timer";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button, FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'
import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import InitialFocus from "./Poppupcard";
import TeamPage from "./TeamPage";



function Table() {
  const [list, setlist] = useState(false)
  const [add, setadd] = useState("")
  const [todo, settodo] = useState([])

  const hanleradd = () => {
    settodo(
      add
    )
  }


  // console.log(todo)

  return (
    <>
      <div height="100vh">
        <Box className="App" position="relative" h={"auto"} >
          <Stack display={"flex"} position="absolute" right={0} m="15px" w={"80vw"}  >

            <Box border={"1px solid grey"} height={"70px"} >
              <Box borderColor={"none"} float={"left"} w={"600px"} display="flex" alignItems={"center"} ><Input placeholder="add task" height={"70px"} p="20px" fontSize={"30px"} value={add}
                onChange={(e) => setadd(e.target.value)} /> <Button onClick={hanleradd} fontSize="30px" h="66px">
                  Add

                </Button>

              </Box>


              <Box float={"right"} border={"1px solid grey"} display="flex" height={"68px"}>  <input type="date" width={"auto"} fontSize="20px" />  <Timer /></Box></Box>

          </Stack >
          <Stack border={"1px solid grey"} h="auto" w={"80vw"} position="absolute" right={"0px"} m="110px 15px 15px 15px"       >
            <Flex h={12} alignItems={'center'}
              fontSize={"25px"} borderBottom="1px solid grey">

              <Tabs variant='unstyled'>
                <TabList fontSize={"20px"}>
                  <Tab fontSize={"20px"} _selected={{ color: 'white', bg: 'green.300' }} onClick={() => setlist(!list)}>List</Tab>
                  <Tab fontSize={"20px"} _selected={{ color: 'white', bg: 'green.300' }} onClick={() => setlist(false)}>Time Sheet</Tab>
                </TabList>

              </Tabs>

            


            </Flex>
            {
              list ? <Box h={16} left="10%" fontSize={"25px"} borderBottom="1px solid grey" alignItems={"center"} pl="20px" display={"flex"} > <Box>{todo}</Box>
                <Box paddingLeft="10px"> <InitialFocus /></Box>  </Box> : (

                <Stack>
                  <Accordion defaultIndex={[0]} allowMultiple >
                    <AccordionItem height={"60px"} fontSize="30px">
                      <h2>
                        <AccordionButton fontSize="30px">
                          <AccordionIcon />
                          <Box flex='1' textAlign='left' display={"flex"}  >
                            This Week <Box>---</Box> <Box fontSize={"20px"} mt="10px">20m</Box>
                          </Box>

                        </AccordionButton>
                      </h2>
                      <AccordionPanel   >
                     
          

                      </AccordionPanel>
                    </AccordionItem>

                  </Accordion>

                </Stack>
              )}
          </Stack>






        </Box>
      </div>
      {/* <div className='managebox'>  <TeamPage /></div> */}


    </>

  );
}
export default Table;
