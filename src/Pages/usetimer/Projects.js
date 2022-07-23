import React, { useEffect } from "react";
import {
  Text,
  Stack,
  Box,
  Flex,
  Button,
  Input,
  Checkbox,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./project.css";
import { DeleteData, getTasks } from "../../redux/User/action";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate=useNavigate()
  // console.log(id,"i");
  const data = useSelector((store) => store.userReducer.tasks);
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  let newData = data.filter((e) => e._id === id);
  //  console.log(newData,"ndata")

  const handelDelete = (i) => {
    // console.log(i,"id");
    dispatch(DeleteData(i)).then(() => dispatch(getTasks()));
  };

  const BackTo=()=>{
    navigate("/")
  }

  useEffect(() => {
    if (newData.length == 0) {
      dispatch(getTasks());
    }
  }, [id, data]);

  return (
   
      <Box>
        <Box className="App" position="relative">
          <Stack
            display={"flex"}
            position="absolute"
            right={0}
            m="15px"
            w={"80vw"}
          >
            <Box height={"auto"}>
              <Box float={"left"}>
                <Box
                  colorScheme="green"
                  w={"auto"}
                  h="70px"
                  borderRadius={"none"}
                  textAlign="center"
                  fontSize={"35px"}
                  padding="25px"
                >
                  Projects
                </Box>
              </Box>

              <Box float={"right"}>
                <Button
                  colorScheme="green"
                  w={"auto"}
                  h="70px"
                  borderRadius={"none"}
                  textAlign="center"
                  fontSize={"25px"}
                  padding="25px"
                  onClick={() => {}}
                >
                  Create Projects
                </Button>
              </Box>
            </Box>
          </Stack>
          <Stack
            border={"1px solid grey"}
            h="80vh"
            w={"80vw"}
            position="absolute"
            right={"0px"}
            m="110px 15px 15px 15px"
          >
            <Flex
              h={16}
              alignItems={"center"}
              bgColor="rgb(249,249,249)"
              fontSize={"25px"}
              justifyContent={"space-between"}
            >
              <Box alignItems={"center"}>
                {" "}
                <Checkbox defaultChecked size={"lg"} left="55px">
                  Select All
                </Checkbox>
              </Box>

              <Box display="flex">
                <Select placeholder="Select option" w="150px">
                  <option value="option1">None</option>
                  <option value="option2">Client</option>
                  <option value="option3">Billing</option>
                  <option value="option3">Budget</option>
                </Select>
                <Select placeholder="Select option" w="150px">
                  <option> Active </option>
                  <option> Favorites </option>
                  <option> Recent </option>
                  <option> Templates </option>
                  <option> HasBudget </option>
                </Select>
                <Input w="250px" placeholder="search projects" />
              </Box>
            </Flex>

            <div className="box">
              <div className="Todobox">
                <Text textAlign={"center"} fontSize={"2rem"}>
                  Todo
                </Text>
                <Box className="todo">
                  {newData.length > 0 &&
                    newData
                      .filter((item) => item.status === "Todo")
                      .map((item) => (
                        <div>
                          <div display="flex">
                            {" "}
                            Project Name: {item.project}
                          </div>
                          <div> Task: {item.tasks}</div>
                          <div> SubTasks:{item.subtask}</div>
                          <div>tag : {item.tag}</div>
                          <Button onClick={() => handelDelete(item._id)}>
                            Delete
                          </Button>
                        </div>
                      ))}
                </Box>
              </div>
              <div className="progressbox">
                <Text textAlign={"center"} fontSize={"2rem"}>
                  In-Progress
                </Text>
                <Box className="progress">
                  {newData.length > 0 &&
                    newData
                      .filter((item) => item.status === "Inprogress")
                      .map((item) => (
                        <div>
                          <div display="flex">
                            {" "}
                            Project Name: {item.project}
                          </div>
                          <div> Task: {item.tasks}</div>
                          <div> SubTasks:{item.subtask}</div>
                          <div>tag : {item.tag}</div>
                          <Button onClick={() => handelDelete(item._id)}>
                            Delete
                          </Button>
                        </div>
                      ))}
                </Box>
              </div>
              <div className="donebox">
                <Text textAlign={"center"} fontSize={"2rem"}>
                  Done
                </Text>
                <Box className="done">
                  {newData.length > 0 &&
                    newData
                      .filter((item) => item.status === "Done")
                      .map((item) => (
                        <div>
                          <div display="flex">
                            {" "}
                            Project Name: {item.project}
                          </div>
                          <div> Task: {item.tasks}</div>
                          <div> SubTasks:{item.subtask}</div>
                          <div>tag : {item.tag}</div>
                          <Button onClick={() => handelDelete(item._id)}>
                            Delete
                          </Button>
                        </div>
                      ))}
                </Box>
              </div>
            </div>
          </Stack>
          <Button  colorScheme="green"
                  w={"auto"}
                  h="35px"
                  borderRadius={"none"}
                  textAlign="center"
                  fontSize={"18px"}
                  m={"5"}
                  padding="25px" onClick={BackTo} >Back to Home</Button>
        </Box>
      </Box>

  );
};

export default Projects;
