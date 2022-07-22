import React from 'react'
import {Text, Stack, Box, Flex, Button, Input, Checkbox,Select, Container } from "@chakra-ui/react";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TaskCard from './TaskCard'

const Projects = () => {
    // const [list ,setlist] =useState(false)
    const {id}=useParams;
    const data=useSelector(store=> store.userReducer.tasks)
    return (
        <Box>
            <Box className="App" position="relative"  >
                <Stack display={"flex"} position="absolute" right={0} m="15px" w={"80vw"} >
                    <Box  height={"70px"}>
                    <Box float={"left"}  >
                         <Box colorScheme='green' w={"auto"} h="70px" borderRadius={"none"} textAlign="center" fontSize={"35px"} padding="25px"  >Projects</Box></Box>
                        
                        
                          <Box float={"right"}  >
                         <Button colorScheme='green' w={"auto"} h="70px" borderRadius={"none"} textAlign="center" fontSize={"25px"} padding="25px"  onClick={()=>{}} >Create Projects</Button></Box></Box>

                </Stack >
                <Stack border={"1px solid grey"} h="80vh" w={"80vw"} position="absolute" right={"0px"} m="110px 15px 15px 15px" >
                    <Flex h={16} alignItems={'center'}  bgColor="rgb(249,249,249)"  fontSize={"25px"}  justifyContent={"space-between"}>
                        <Box alignItems={"center"}> <Checkbox defaultChecked size={"lg"} left="55px">Select All</Checkbox></Box>
                   
<Box  display="flex" >
<Select placeholder='Select option' w="150px" >
  <option value='option1'>None</option>
  <option value='option2'>
Client</option>
  <option value='option3'>Billing</option>
  <option value='option3'>Budget</option>
</Select>
<Select placeholder='Select option' w="150px" >

  <option> Active </option>
  <option> Favorites </option>
  <option> Recent </option>
  <option> Templates </option>
  <option> HasBudget </option>

</Select>
<Input  w="250px" placeholder='search projects'/>
           
</Box>
            
           
                    </Flex>
             <div border={"1px solid gray"} style={{ display:"flex" , height:"500px", width:"100%" }} >

             <div style={{flex:"1" }} >
              <Text  fontSize={"2rem"} textAlign={"center"} >Todo</Text>
              <div  style={{border:"1px solid gray", height:"400px"}} >
                {
                  data.length >0 && data.filter((e)=>e.status==="Todo")
                  .map((e)=>{
                    return <TaskCard key={e.id} {...e}  />
                  })
                }
              </div>


             </div>
             <div style={{flex:"1" }} >
             <Text fontSize={"2rem"} textAlign={"center"} >In-Progress</Text>
             <div  style={{border:"1px solid gray", height:"400px"}} >
             {
                  data.length >0 && data.filter((e)=>e.status==="InProgress")
                  .map((e)=>{
                    return <TaskCard key={e.id} {...e}  />
                  })
                }
             </div>

             </div>
             <div style={{flex:"1"}} >
             <Text fontSize={"2rem"} textAlign={"center"} >Done</Text>
             <div  style={{border:"1px solid gray" , height:"400px"}}>
             {
                  data.length >0 && data.filter((e)=>e.status==="Done")
                  .map((e)=>{
                    return <TaskCard key={e.id} {...e}  />
                  })
                }
             </div>

             </div>
             </div>
                      {/* <img w={"30px"} src='https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/all-features-3.png' ></img> */}
                </Stack>
            </Box>
            </Box>
            )
}

export default Projects