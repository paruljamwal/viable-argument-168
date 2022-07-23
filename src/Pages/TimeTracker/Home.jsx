import React, { useCallback, useEffect } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTasks } from "../Redux/AppReducer/action";
import TaskCard from "../Components/TaskCard";
const Home = () => {
  const [searchParams]=useSearchParams()
  const tasks = useSelector((store) => store.App.tasks);
  const dispatch = useDispatch();
  const getTaskHandler = useCallback(() => {
    dispatch(getTasks());
  }, [dispatch]);
  useEffect(() => {
    if (tasks.length === 0) {
      getTaskHandler();
    }
  }, [getTaskHandler, tasks.length]);

  const filterByParamTags=(task)=>{
    const paramTags=searchParams.getAll('tags'); 
    //   giving ..array of tags...
   if(paramTags.includes("All") || paramTags.length ===0 ){
    return task;
   }



    const data=task.tags.filter((tag)=>{
      if(paramTags.includes(tag)){
        return true;
      }
      return false;

    });
    if(data.length){
      return task;
    }
    console.log(data)
    return false;
  }


  return (
    <Box w="100%">
      <Flex justifyContent="space-around">
        {/* todo */}
        <Box border="1px solid black" width="250px" height="95vh">
          <Box>
            <Text textAlign={"center"}>TODO</Text>
          </Box>
          {tasks.length > 0 &&
            tasks
              .filter((item) => item.task_status === "todo")
              .filter(filterByParamTags)
              .map((item) => {
                return <TaskCard key={item.id} {...item} />;
              })}
        </Box>
        {/* in-progress */}
        <Box border="1px solid black" width="250px" height="95vh">
          <Box>
            <Text textAlign={"center"}>IN_PROGRESS</Text>
            <Box>
              {tasks.length > 0 &&
                tasks
                  .filter((item) => item.task_status === "in-progress")
                  .filter(filterByParamTags) 
                  .map((item) => {
                    return <TaskCard colorScheme="purple" key={item.id} {...item} />;
                  })}
            </Box>
          </Box>
        </Box>
        {/* DOne */}
        <Box border="1px solid black" width="250px" height="95vh">
          <Box>
            <Text textAlign={"center"}>DONE</Text>
            <Box>
              {tasks.length > 0 &&
                tasks
                  .filter((item) => item.task_status === "Done")
                  .filter(filterByParamTags)
                  .map((item) => {
                    return <TaskCard colorScheme="yellow" key={item.id} {...item} />;
                  })}
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
