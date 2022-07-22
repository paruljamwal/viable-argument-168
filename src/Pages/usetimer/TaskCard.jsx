import { EditIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  Stack,
  TagLeftIcon,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {Link, useParams} from 'react-router-dom';

const TaskCard = ({
  id,
  title,
  description,
  tags,
  subtask,
  tasks,
  colorScheme = "green",
}) => {
  const [checkBox, setCheckBox] = useState(() => {
    let data = subtask
      .filter((i) => {
        return i.tasks 
      })
      .map((e) => e.subtasks);
    return data;
  });

  return (
    <Box
      border="1px solid red"
      width="230px"
      padding="10px"
      margin={"4%"}
    >
      <Flex justifyContent={"space-between"}>
        <Text>{title}</Text>
       <Link to={`/task/${id}`} > <EditIcon></EditIcon></Link>
      </Flex>
      <Box>
        <Stack direction={"row"}>
          {tags.length &&
            tags.map((e, i) => {
              return (
                <Badge key={i} colorScheme={colorScheme}>
                  {e}
                </Badge>
              );
            })}
        </Stack>
      </Box>
      <Text>{description}</Text>
      <Box>
        <CheckboxGroup value={checkBox}>
          {subtask.length &&
            subtask.map((item, i) => (
              <Checkbox key={i} size="md" value={item.subtask}>
                {item.subtask}
              </Checkbox>
            ))}
        </CheckboxGroup>
      </Box>
    </Box>
  );
};

export default TaskCard;
