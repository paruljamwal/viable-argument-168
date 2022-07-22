import React from "react";
import "./footer.css";

import { List, ListItem, ListIcon, Box } from "@chakra-ui/react";

import { FcGoogle } from "react-icons/fc";
import { Link as RouterLink } from "react-router-dom";
const UPPERFooter = () => {
  return (
    <>
      <div>
        <Box
          className="rsContainer"
          display={{ base: "block", md: "block", lg: "flex" }}
          mt={{ base: "10rem", md: "10rem", lg: "0rem" }}
        >
          <div className="subdiv">
            <h2 className="page-title">
              {" "}
              Take control of your time with Everhour
            </h2>
            <div className="page-subtitle">
              <h3>
                Beautiful integrations. Intuitive interface. No unexpected fees{" "}
              </h3>
            </div>
            <form className="signup_by_email">
              <div>
                <input placeholder="Working email...." className="inp" />
                <RouterLink to="/signup" style={{ textDecoration: "none" }}>
                  {" "}
                  <button className="actionbtn">Try free</button>
                </RouterLink>
              </div>

              <span width="10px">
                <FcGoogle />{" "}
              </span>
              <RouterLink to="/signup" style={{ textDecoration: "none" }}>
                Or sign up with Google Account
              </RouterLink>
            </form>
          </div>

          <Box
            w={{ base: "98%", md: "55%", lg: "400px" }}
            height={{ base: "370px", md: "270px", lg: "270px" }}
            lineHeight="3.5"
            ml={{ base: "0.2rem", md: "2rem", lg: "0rem" }}
            mt={{ base: "21rem", md: "15rem", lg: "0rem" }}
          >
            <List spacing={1} className="dotlist">
              <ListItem>
                <ListIcon
                  fontSize={"13px"}
                  bg={"#57bb71"}
                  borderRadius={"50%"}
                  color="green.500"
                />
                Track time from the apps you already use
              </ListItem>
              <ListItem>
                <ListIcon
                  fontSize={"13px"}
                  bg={"#57bb71"}
                  borderRadius={"50%"}
                  color="green.500"
                />
                Know where your team’s time is going
              </ListItem>
              <ListItem>
                <ListIcon
                  fontSize={"13px"}
                  bg={" #57bb71"}
                  borderRadius={"50%"}
                  color="green.500"
                />
                Keep projects on budget
              </ListItem>
              <br />

              <ListItem>
                <ListIcon
                  fontSize={"13px"}
                  bg={"#57bb71"}
                  borderRadius={"50%"}
                  color="green.500"
                />
                Increase transparency
              </ListItem>

              <ListItem>
                <ListIcon
                  fontSize={"13px"}
                  bg={"#57bb71"}
                  borderRadius={"50%"}
                  color="green.500"
                />
                Make your workflow more efficient
              </ListItem>
              <ListItem>
                <ListIcon
                  fontSize={"13px"}
                  bg={"#57bb71"}
                  borderRadius={"50%"}
                  color="green.500"
                />
                Spot burnout before it happens
              </ListItem>
            </List>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default UPPERFooter;
