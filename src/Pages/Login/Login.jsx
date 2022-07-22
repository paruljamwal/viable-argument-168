import React, { useState } from "react";
import styles from "./Login.module.css";
import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CheckLogin } from "../../redux/Auth/action";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const comeFrom = location?.state?.from?.pathname;
  const loading = useSelector((store) => store.AuthReducer.isLoading);

  const isError = useSelector((store) => store.AuthReducer.isLoading);
  const [checkErrors, setcheckError] = useState(false);
  const HandleLoginAuth = () => {
    setcheckError(true);
    const userinput = {
      email: email,
      password: password,
    };
    dispatch(CheckLogin(userinput)).then((r) => {
      if (r.type === "LOGIN_SUCCESS") {
        navigate(comeFrom, { replace: true } || "/");
      }
    });
  };
  return (
    <div>
      <Box mt="9rem">
        <Heading
          as="h1"
          fontSize={{ base: "2rem", md: "2.5rem", lg: "3rem" }}
          lineHeight="1.17"
          fontWeight="400"
          fontFamily={"'geomanist-book',sans-serif"}
          color="#333"
          mb="15px"
        >
          Log in to Everhour
        </Heading>
        <Heading
          as="h3"
          fontSize="1.375rem"
          fontWeight="400"
          fontFamily={"'geomanist-book',sans-serif"}
          lineHeight="1.36"
          color="#767676"
        >
          Using the former version of Everhour? Please{" "}
          <Link className={styles.login_links} to="/login">
            {" "}
            login here
          </Link>
        </Heading>
      </Box>
      <Box
        className={styles.bg_image}
        w="100%"
        h={{ base: "auto", md: "540px", lg: "540px" }}
        border={"1px dashed white"}
        mt="2rem"
        mb="9rem"
      >
        <Box
          className={styles.login_data_container}
          w={{ base: "100%", md: "82%", lg: "70%" }}
          h="86%"
          bg="white"
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          borderRadius="7px"
          m="auto"
          mt="3%"
          display={{ base: "block", md: "flex", lg: "flex" }}
          justifyContent="space-between"
        >
          <Box
            w={{ base: "90%", md: "35%", lg: "35%" }}
            h={{ base: "70%", md: "90%", sm: "90%" }}
            mt="2.4%"
            ml="7%"
            pt={{ base: "50px", md: "0px", lg: "0px" }}
            pb={{ base: "20px", md: "0px", lg: "0px" }}
            borderBottom={{ base: "1px solid grey", md: "none", lg: "md" }}
          >
            <Button
              bg="transparent"
              border={"1px solid #7c7c7c "}
              color="#7c7c7c"
              w="100%"
              h="50px"
              mb="10px"
              display={"flex"}
              justifyContent="space-between"
            >
              <Image
                ml="15px"
                w="17px"
                h="17px"
                src="data:image/png;base64,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"
                alt="googlelogo"
                borderRadius={"50%"}
              ></Image>{" "}
              <Text mr="27%">Log in with Google</Text>
            </Button>
            <Text color="#7c7c7c" mb="10px">
              or
            </Text>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
              w="100%"
              h="50px"
              mb="20px"
              isRequired
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password..."
              w="100%"
              h="50px"
              mb="25px"
              isRequired
            />
            {checkErrors ? (
              email.length === 0 || password.length === 0 ? (
                <Text mt="-20px" color={"red"} textAlign="right">
                  Please fill email and password !
                </Text>
              ) : (
                isError && (
                  <Text mt="-20px" color={"red"} textAlign="right">
                    wrong email and password !
                  </Text>
                )
              )
            ) : (
              ""
            )}

            <button className={styles.login_btn} onClick={HandleLoginAuth}>
              {loading ? <Spinner color="red.500" /> : "Log in"}
            </button>
            <Box display={"flex"} gap="10px" w="80%" m="auto">
              <Text
                color="#7c7c7c"
                fontSize={"0.9rem"}
                textDecoration="underline"
                className={styles.login_other_options}
              >
                Login with SSO{" "}
              </Text>{" "}
              <Text fontSize={"0.9rem"} color="#7c7c7c">
                A
              </Text>{" "}
              <Text
                color="#7c7c7c"
                fontSize={"0.9rem"}
                textDecoration="underline"
                className={styles.login_other_options}
              >
                More login options
              </Text>
            </Box>
            <Text
              color="#7c7c7c"
              fontSize={"0.9rem"}
              textDecoration="underline"
              textAlign={"center"}
              className={styles.login_other_options}
              mt="10px"
            >
              Reset password
            </Text>
          </Box>
          {/* Box text */}
          <Box
            w={{ base: "90%", md: "45%", lg: "45%" }}
            h={{ base: "50%", md: "90%", lg: "90%" }}
            mt={{ base: "5%", md: "2.4%", lg: "2.4%" }}
            mr="5%"
            ml={{ base: "1.4rem", md: "0%", lg: "0%" }}
            pt={{ base: "50px", md: "0px", lg: "0px" }}
            pb={{ base: "20px", md: "0px", lg: "0px" }}
          >
            <Text
              color={"red"}
              textAlign="left"
              ml={{ base: "1%", md: "15%", lg: "15%" }}
              mb="10px"
            >
              NEWS
            </Text>
            <Box
              borderLeft={{
                base: "none",
                md: "1px solid #7c7c7c",
                lg: "1px solid #7c7c7c",
              }}
            >
              <Heading
                as="h3"
                fontSize={"1.1rem"}
                textAlign="left"
                ml={{ base: "1%", md: "15%", lg: "15%" }}
                fontWeight="700"
              >
                Integration with Todoist
              </Heading>
              <Text
                color="#7c7c7c"
                textAlign="left"
                ml={{ base: "1%", md: "15%", lg: "15%" }}
                mb="15px"
              >
                Everhour now integrates with Todoist!{" "}
                <a
                  className={styles.login_links}
                  href="https://everhour.com/blog/everhour-now-integrates-with-todoist/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Learn more
                </a>
              </Text>
              <Heading
                as="h3"
                fontSize={"1.1rem"}
                textAlign="left"
                ml={{ base: "1%", md: "15%", lg: "15%" }}
                fontWeight="700"
              >
                Integration with Notion
              </Heading>
              <Text
                color="#7c7c7c"
                textAlign="left"
                ml={{ base: "1%", md: "15%", lg: "15%" }}
                mb="15px"
              >
                Everhour now integrates with Notion!
                <a
                  className={styles.login_links}
                  href="https://everhour.com/blog/integrating-everhour-with-notion/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Learn more
                </a>
              </Text>
              <Heading
                as="h3"
                fontSize={"1.1rem"}
                textAlign="left"
                ml={{ base: "1%", md: "15%", lg: "15%" }}
                fontWeight="700"
              >
                Single Sign-On
              </Heading>
              <Text
                color="#7c7c7c"
                textAlign="left"
                ml={{ base: "1%", md: "15%", lg: "15%" }}
                mb="15px"
              >
                Use single sign-on (SSO) to access Everhour for your projects
                and timesheets.
                <a
                  className={styles.login_links}
                  href="https://everhour.com/blog/single-sign-on-sso-in-everhour/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Learn more
                </a>
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
