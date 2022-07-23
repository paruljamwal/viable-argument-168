import { Stack, Box, Flex, Button, Input } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Timer from "./Timer";
import { getTasks } from "../../redux/User/action";
import { useNavigate } from "react-router-dom";

function TableData() {
  const data = useSelector((store) => store.userReducer.tasks);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [list, setlist] = useState(false);
  const [add, setadd] = useState("");
  const [todo, settodo] = useState([]);
  // console.log(data, "data");
 

  const handleDetails=(id)=>{
    // console.log(id,"id");
    navigate(`/project/${id}`)
  }
  
  useEffect(() => {

      dispatch(getTasks()).then(()=>dispatch(getTasks()));
   
  }, []);


  return (
    <>
      <Box className="App" position="relative">
        <Stack
          display={"flex"}
          position="absolute"
          right={0}
          m="15px"
          w={"80vw"}
        >
          <Box border={"1px solid lightgrey"} height={"70px"}>
            <Box float={"left"} w={"400px"}>
              <Input
                placeholder="add task"
                value={add}
                onChange={(e) => setadd(e.target.value)}
              />
            </Box>
            <Box float={"right"}>
              {" "}
              <Timer />
            </Box>
          </Box>
        </Stack>
        <Stack
          // border={"1px solid lightgrey"}
          h="auto"
          w={"80vw"}
          position="absolute"
          right={"0px"}
          m="110px 15px 15px 15px"
        >
          <Flex
            h={16}
            alignItems={"center"}
            fontSize={"25px"}
            borderBottom="1px solid grey"
          >
            <Box
              p={"18px 18px 10px 18px"}
              onClick={() => setlist(!list)}
              borderBottom="5px solid green"
            >
              List
            </Box>
            <Box
              p={"18px 18px 10px 18px"}
              cursor="pointer"
              borderBottom="5px solid green"
              onClick={() => setlist(!list)}
            >
              Time Sheet
            </Box>
           
          </Flex>
          <Stack>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem height={"60px"} fontSize="30px">
                <h2>
                  <AccordionButton fontSize="30px">
                    <AccordionIcon />
                    <Box
                      flex="1"
                      fontSize={"20"}
                      textAlign="left"
                      display={"flex"}
                    >
                      This Week <Box>---</Box> 20m  
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel fontSize={"15"} pb={3} h="auto">
                  <TableContainer>
                    <Table variant="simple">
                      <TableCaption>Time Tracker</TableCaption>
                      <Thead>
                        <Tr>
                          <Th>Project Name </Th>
                          <Th>UserName</Th>
                          <Th>Tag</Th>
                          <Th>Timer</Th>
                          <Th>Details</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {data.map((e) => (
                          <Tr>
                         
                            <Td>{e.project}</Td>
                            <Td>{e.userName}</Td>
                            <Td>{e.tag}</Td>
                            <Td><Timer/></Td>
                            <td><Button onClick={()=>handleDetails(e._id)} >Details</Button></td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}

export default TableData;
