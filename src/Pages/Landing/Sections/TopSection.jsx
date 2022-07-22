import { Spinner } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/layout";
import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import {
  Head,
  Box,
  Box1,
  Content,
  Blue,
  Pro,
  Flex,
  Button1,
  Button2,
  Video,
  Image,
  Div,
  P,
  UseCase,
  Head1,
  Lists,
  ChangingPic,
  Load,
  LoadingImg
} from "../Stlyed/Topsection.styled";

const TopSection = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Box>
        <Head>
          Powerful time tracking software with hassle-free integrations
        </Head>
        <Content>
          Accurate time tracker for budgeting, client invoicing and painless
          payroll.
          <Div>
            <P>
              <span> Perfect for </span> <Blue>Asana </Blue>{" "}
              <Blue>Trello </Blue>
              <Blue>Basecamp </Blue> <Blue>Jira </Blue>
              <Blue>ClickUp </Blue> <Blue>GitHub </Blue>
            </P>
          </Div>
        </Content>
        <Box1>
          <Button1>Try free</Button1>
          <Button2>Book a demo</Button2>
        </Box1>
      </Box>
      <Video>
        {/* <Load>
        <Spinner color='green.500' />
      </Load> */}
        <a href="https://youtu.be/k2OeJBqXccI" target="_blank" rel="noreferrer">
          {" "}
          <Image src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/home-narrow-v2.webp" />
          <LoadingImg  src="https://i.pinimg.com/originals/71/3a/32/713a3272124cc57ba9e9fb7f59e9ab3b.gif"/>
        </a>
      </Video>
    </>
  );
};

export default TopSection;
