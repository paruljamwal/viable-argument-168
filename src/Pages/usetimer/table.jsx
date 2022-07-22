import { Stack, Box, Flex, Button, Input } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { useState } from "react";
import Timer from "./Timer";


function Table() {
  const [list, setlist] = useState(false)
  const [add, setadd] = useState("")
  const [todo, settodo] = useState([])
  return (
    <>
      <Box className="App" position="relative"  >
        <Stack display={"flex"} position="absolute" right={0} m="15px" w={"80vw"} >

          <Box border={"1px solid grey"} height={"70px"}>
            <Box float={"left"} w={"400px"}  ><Input placeholder="add task"  value={add} onChange={(e) => setadd(e.target.value)} />
            </Box>
            <Box float={"right"}  >  <Timer /></Box></Box>

        </Stack >
        <Stack border={"1px solid grey"} h="80vh" w={"80vw"} position="absolute" right={"0px"} m="110px 15px 15px 15px" >
          <Flex h={16} alignItems={'center'} fontSize={"25px"} borderBottom="1px solid grey">
            <Box p={"18px 18px 10px 18px"} onClick={() => setlist(!list)}
              borderBottom="5px solid green">List</Box>
            <Box p={"18px 18px 10px 18px"} cursor="pointer" borderBottom="5px solid green" onClick={() => setlist(!list)}>Time Sheet</Box>


          </Flex>
          <Stack>
            <Accordion defaultIndex={[0]} allowMultiple >
              <AccordionItem height={"60px"} fontSize="30px">
                <h2>
                  <AccordionButton fontSize="30px">
                    <AccordionIcon />
                    <Box flex='1' textAlign='left' display={"flex"} >
                      This Week <Box>---</Box> <Box fontSize={"20px"} mt="10px">20m</Box>
                    </Box>

                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} h="auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </AccordionPanel>
              </AccordionItem>

            </Accordion>

          </Stack>
        </Stack>


      </Box >



    </>

  );
}

export default Table;
