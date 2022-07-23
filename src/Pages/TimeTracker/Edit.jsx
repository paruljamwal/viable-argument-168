import {
  Box,
  Button,
  Editable,
  EditablePreview,
  EditableTextarea,
  Flex,
  Input,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Radio } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  AddSubTasks,
  DeleteData,
  getTasks,
  updateTASKS,
} from "../Redux/AppReducer/action";
import { useDispatch } from "react-redux";

const Edit = () => {
  const tasks = useSelector((store) => store.App.tasks);
  const { id } = useParams();
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [taskTags, setTaskTags] = useState([]);
  const [currentSubTask, setCurrentSubTask] = useState("");
  const [subTasks, setSubTasks] = useState([]);
  const [checkBox, setCheckBox] = useState([]);

  const dispatch = useDispatch();
  const addsubtask = (e) => {
    e.preventDefault();
    if (currentSubTask) {
      const newSubTasks = [
        ...subTasks,
        { subTaskTittle: currentSubTask, status: false },
      ];
      dispatch(AddSubTasks(id, { subTasks: newSubTasks })).then(() =>
        dispatch(getTasks())
      );
    }
  };

  const updateHandler = (type, value) => {
    // console.log("dsfsdf")
    if (type === "textAndDescription") {
      dispatch(
        updateTASKS(id, {
          title: taskTitle,
          description: taskDescription,
        })
      ).then(() => dispatch(getTasks()));
    }

    //radio btn
    else if (type === "taskStatus") {
      dispatch(updateTASKS(id, { task_status: value })).then(() =>
        dispatch(getTasks())
      );
    }

    //tags......
    else if (type === "taskTags") {
      dispatch(updateTASKS(id, { tags: value })).then(() =>
        dispatch(getTasks())
      );
    }
  };

  //updatesub tasks status

  const updateSubTaskStatus = (checkvalue) => {
    // console.log(checkvalue,"c"); // getting array of subtasks
    let newData = subTasks.map((e) => {
      if (checkvalue.includes(e.subTaskTittle)) {
        // console.log(e.subTaskTittle);
        return {
          ...e,
          status: true,
        };
      }
      return { ...e, status: false };
    });
    dispatch(AddSubTasks(id, { subTasks: newData })).then(() =>
      dispatch(getTasks())
    );
  };

  //delete subTasks..........
  const handelDelete = (title) => {
    // console.log(title,"df");
    let newData = subTasks.filter((item) => item.subTaskTittle !== title);
    console.log(id, newData);
    dispatch(DeleteData(id, { subTasks: newData }))
    .then(() =>dispatch(getTasks()));
  };

  //after refreshing if data is not persist....... get back from store
  useEffect(() => {
    if (tasks.length === 0) {
      dispatch(getTasks());
    }
  });

  useEffect(() => {
    if (tasks) {
      var currentTask = tasks.find((e) => e.id === Number(id));
    }
    if (currentTask) {
      setTaskTitle(currentTask.title);
      setTaskDescription(currentTask.description);
      setTaskStatus(currentTask.task_status);
      setTaskTags(currentTask.tags);
      setSubTasks(currentTask.subTasks);

      let data = currentTask.subTasks
        .filter((item) => {
          return item.status && item.subTaskTittle;
        })
        .map((item) => item.subTaskTittle);
      setCheckBox(data);
    }
  }, [id, tasks]);
  return (
    <Box border="1px solid green">
      <Flex justifyContent="space-around" mt="3vh">
        <Box border="2px solid red" h="90vh" width="200px">
          {/* task title  */}
          <Box>
            <Stack direction="column">
              <Input
                value={taskTitle}
                placeholder="title"
                onChange={(e) => setTaskTitle(e.target.value)}
              />
              <Editable value={taskDescription}>
                <EditablePreview />
                <EditableTextarea
                  value={taskDescription}
                  placeholder="title"
                  onChange={(e) => setTaskDescription(e.target.value)}
                />
              </Editable>

              <Button
                onClick={() => {
                  updateHandler("textAndDescription");
                }}
              >
                Update
              </Button>
            </Stack>

            <Box marginTop={"20%"}>
              <RadioGroup
                onChange={(value) => {
                  setTaskStatus(value);
                  updateHandler("taskStatus", value);
                }}
                value={taskStatus}
              >
                <Stack direction="column">
                  <Radio value="todo">Todo</Radio>
                  <Radio value="in-progress">In-Progress</Radio>
                  <Radio value="done">Done</Radio>
                </Stack>
              </RadioGroup>
            </Box>

            <Box marginTop={"20%"}>
              <Text>Tags</Text>

              <CheckboxGroup
                colorScheme="green"
                value={taskTags}
                onChange={(value) => {
                  setTaskTags(value);
                  updateHandler("taskTags", value);
                }}
              >
                <Stack spacing={[1, 5]} direction={"column"}>
                  <Checkbox value="official">Official</Checkbox>
                  <Checkbox value="personal">Personal</Checkbox>
                  <Checkbox value="others">Others</Checkbox>
                </Stack>
              </CheckboxGroup>
            </Box>
          </Box>
        </Box>

        {/* SubTask */}
        <Box border="2px solid purple" h="90vh" width="350px">
          <form onSubmit={addsubtask}>
            <Flex>
              <Input
                placeholder="Add new subtask"
                value={currentSubTask}
                onChange={(e) => setCurrentSubTask(e.target.value)}
              />
              <Button ml={"0.5rem"} type="submit">
                Add
              </Button>
            </Flex>
          </form>

          <Flex direction="colunm" p="1rem" gap="1rem">
            <CheckboxGroup
              colorScheme="green"
              onChange={(value) => {
                setCheckBox(value);
                updateSubTaskStatus(value);
                // console.log(checkBox);
              }}
              value={checkBox}
            >
              {subTasks.length &&
                subTasks.map((item, i) => (
                  <Flex direction='column' >
                    <Checkbox key={i} size="md" value={item.subTaskTittle}>
                      {item.subTaskTittle}
                    </Checkbox>
                    <DeleteIcon onClick={()=>handelDelete(item.subTaskTittle)} />
                  </Flex>
                ))}
            </CheckboxGroup>
          </Flex>
        </Box>
        <Box border="2px solid green" h="90vh" width="250px"></Box>
      </Flex>
    </Box>
  );
};

export default Edit;
