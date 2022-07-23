import React, { useReducer } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Editable,
  EditablePreview,
  EditableInput,
  EditableTextarea,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { RegisterData } from "../../redux/Auth/action";
import { REGISTER_SUCCESS } from "../../redux/Auth/actiontype";
import { useNavigate } from "react-router-dom";
//local reducer
function reducer(store, action) {
  switch (action.type) {
    case "name":
      return {
        ...store,
        name: action.payload,
      };
    case "email":
      return {
        ...store,
        email: action.payload,
      };
    case "password":
      return {
        ...store,
        password: action.payload,
      };
    case "username":
      return {
        ...store,
        username: action.payload,
      };
    case "mobile":
      return {
        ...store,
        mobile: action.payload,
      };
    case "description":
      return {
        ...store,
        description: action.payload,
      };
    default:
      return store;
  }
}

const init = {
  name: "",
  email: "",
  password: "",
  username: "",
  mobile: 0,
  description: "",
};

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [store, checker] = useReducer(reducer, init);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(store);

  const signupHandler = () => {
    dispatch(RegisterData(store)).then((r) => {
      if (r === REGISTER_SUCCESS) {
        navigate("/login", { replace: true });
      }
    });
  };
  return (
    <div  style={{marginTop:'5rem'}}>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="Name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                      type="text"
                      value={store.name}
                      onChange={(e) =>
                        checker({ type: "name", payload: e.target.value })
                      }
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="username" isRequired>
                    <FormLabel>username</FormLabel>
                    <Input
                      type="text"
                      value={store.username}
                      onChange={(e) =>
                        checker({ type: "username", payload: e.target.value })
                      }
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={store.email}
                  onChange={(e) =>
                    checker({ type: "email", payload: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={store.password}
                    onChange={(e) =>
                      checker({ type: "password", payload: e.target.value })
                    }
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Box>
                <FormControl id="mobile" isRequired>
                  <FormLabel>Mobile</FormLabel>
                  <Input
                    type="number"
                    value={store.mobile}
                    onChange={(e) =>
                      checker({ type: "mobile", payload: e.target.value })
                    }
                  />
                </FormControl>
              </Box>
              <Box>
                <Editable defaultValue="Description">
                  <EditablePreview />
                  <EditableTextarea
                    value={store.description}
                    onChange={(e) =>
                      checker({ type: "description", payload: e.target.value })
                    }
                  />
                </Editable>
              </Box>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={signupHandler}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <RouterLink to={"/login"} color={"blue.400"}>
                    Login
                  </RouterLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
};

export default Register;