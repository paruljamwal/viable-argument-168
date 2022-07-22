import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { saveFromData } from "../utils/localStorage";

const DetailForm = () => {
  const [projectName, setProjectName] = useState("");
  const [email, setEmail] = useState("");
  const [task, setTask] = useState("");
  const [desDetails, setDesDetails] = useState("");
  const [selectOpt, setSelectOpt] = useState("");

  const handleOnClick = (e) => {
    let formData = [
      {
        projectName: projectName,
        email: email,
        task: task,
        desDetails: desDetails,
        selectOpt: selectOpt,
      },
    ];
    saveFromData("FMdata", formData);
    // console.log(formData);
  };

  return (
    <Box>
      <FormControl width={"40%"} margin={"auto"} p={"7%"}>
        <FormLabel>Project Name</FormLabel>
        <Input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setProjectName(e.target.value)}
          value={projectName}
        />
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <FormControl>Task</FormControl>
        <Input
          type="text"
          placeholder="Enter your Task"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <FormControl>Description</FormControl>
        <Textarea
          placeholder="Here is a sample placeholder"
          onChange={(e) => setDesDetails(e.target.value)}
          value={desDetails}
        />
        <FormLabel>SubTask</FormLabel>
        <Select
          placeholder="Select Task Type"
          onChange={(e) => setSelectOpt(e.target.value)}
          value={selectOpt}
        >
          <option>All</option>
          <option>Official</option>
          <option>Personal</option>
          <option>Other</option>
        </Select>
        <Button
          m={"auto"}
          mt={"8px"}
          colorScheme="blue"
          type="submit"
          onClick={handleOnClick}
        >
          Button
        </Button>
      </FormControl>
    </Box>
  );
};

export default DetailForm;
