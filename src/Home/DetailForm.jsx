import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import React, { useReducer } from "react";
import { saveFromData } from "../utils/localStorage";
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {AddUser} from '../redux/User/action'
import {useState} from 'react'


const DetailForm = () => {



  const dispatch=useDispatch();
  const navigate=useNavigate()
 

 
  const [userName,setName]=useState("")
  const [project,setProject]=useState("");
  const [email,setEmail]=useState("");
  const [tasks,setTasks]=useState("");
  const [mobile,setmobile]=useState("");
  const [description,setDescription]=useState("");
  const [tag,setTag]=useState("");
  const [subtask,setSubTask]=useState("");
  const [status,setStatus]=useState("Todo");
  const handleOnClick=(e)=>{
    e.preventDefault()
    let data={userName:userName,subtask:subtask,project:project,email:email,status:status,tasks:tasks,mobile:mobile,description:description,tag:tag}
    dispatch(AddUser(data))
    navigate("/table");
  }

  
  


  return (
    <>

    <Box>
      
      <FormControl width={"40%"} margin={"auto"} p={"7%"}>
        <FormLabel>Project Name</FormLabel>
        <Input
          type="text"
          placeholder="Enter your name"
          onChange={(e)=>setProject(e.target.value)}
          
        
        />
     <FormLabel>Name</FormLabel>
        <Input
          type="text"
          placeholder="Enter your name"
          onChange={(e)=>setName(e.target.value)}
          
        
        />
        
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Enter Email"
          onChange={(e)=>setEmail(e.target.value)}
      
        />
        <FormControl>Task</FormControl>
        <Input
          type="text"
          placeholder="Enter your Task"
          onChange={(e)=>setTasks(e.target.value)}
          />

          <FormControl>SubTask</FormControl>
          <Input
          type="text"
          placeholder="Enter your Task"
          onChange={(e)=>setSubTask(e.target.value)}
        />


        <FormControl>Mobile</FormControl>
        <Input
          type="number"
          placeholder="Enter your Task"
          onChange={(e)=>setmobile(e.target.value)}
        />
       
        <FormControl>Description</FormControl>
        <Textarea
          placeholder="Here is a sample placeholder"
          onChange={(e)=>setDescription(e.target.value)}       
        />


        <FormLabel>Tag</FormLabel>
        <Select
          placeholder="Select Task Type"
          onChange={(e)=>setTag(e.target.value)}
        >
          <option value="All" >All</option>
          <option value="Official" >Official</option>
          <option value="Personal" >Personal</option>
          <option value="Other" >Other</option>
        </Select> 
        <Button
          m={"auto"}
          mt={"8px"}
          colorScheme="blue"
         
          onClick={handleOnClick}
        >
          Button
        </Button>
      </FormControl>
    </Box>
    </>
  );
};

export default DetailForm;
