import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { LoginData } from "../../redux/Auth/action";
import { LOGIN_SUCCESS } from "../../redux/Auth/actiontype";
import { useDispatch, useSelector } from "react-redux/es/exports";
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isLoading = useSelector((store) => store.AuthReducer.isLoading);
  const dispatch = useDispatch();
  const loginHandle = () => {
    if (username && password) {
      const params = {
        username,
        password,
      };
      console.log(params);
      dispatch(LoginData(params)).then((r) => {
        console.log(r, "r");
        if (r === LOGIN_SUCCESS) {
          console.log("dfdsgfds");
          navigate("/home", { replace: true });
        } else {
          console.log("error");
        }
      });
    }
  };

  return (
    <div style={{marginTop:'5rem'}} >
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>username</FormLabel>
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={loginHandle}
                  isLoading={isLoading}
                >
                  Sign in
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Don't have an account?{" "}
                  <RouterLink to={"/logout"} color={"blue.400"}>
                    SignUp
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

export default Login;