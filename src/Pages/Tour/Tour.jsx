import React from "react";
import { Heading, Box, Flex, pt, Text } from "@chakra-ui/react";

const Tour = () => {
  return (
    <div>
      <Flex
        justifyContent={"space-between"}
        padding={"50px 10px 20px 100px"}
        // border={"10px solid green"}
      >
        <Box>
          <Heading
            size="lg"
            pt={"50px"}
            fontWeight={"500"}
            fontSize="50px"
            textAlign={"left"}
          >
            Everything you need <br /> for workforce <br /> management
          </Heading>
          <Heading
            size="sm"
            pt={"20px"}
            fontWeight={"400"}
            fontSize="23px"
            color={"grey"}
            textAlign={"left"}
          >
            Everhour will make your daily job way easier <br /> and more
            organized
          </Heading>
        </Box>
        <img
          src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/all-features-3.webp"
          alt=""
          width={"650px"}
        />
      </Flex>

      {/* ----------- PART 2 ----------- */}

      <Heading
        size="sm"
        pt={"200px"}
        fontWeight={"500"}
        fontSize="35px"
        // color={"grey"}
        textAlign={"center"}
      >
        Time management
      </Heading>
      <Heading
        size="sm"
        pt={"8px"}
        fontWeight={"400"}
        fontSize="20px"
        color={"grey"}
        textAlign={"center"}
      >
        Track time spent on projects, hours of work, vacations or sick days
      </Heading>
      <Box display={"flex"} justifyContent={"center"} p={"40px 0px"}>
        <img
          src="https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/time-tracking-timesheet-view.webp"
          alt=""
        />
      </Box>
      <Box
        display={"Grid"}
        gridTemplateColumns={"repeat(3, 250px)"}
        // width={"85%"}
        height={"auto"}
        gap={"5%"}
        justifyContent={"space-around"}
      >
        <Box>
          <Heading size="lg" fontSize="20px">
            ⭐ Seemless integrations
          </Heading>
          <Text fontSize="md">
            Track time right inside the most popular apps, such as Asana,
            Basecamp, Jira, Trello, GitHub, ClickUp and more.
          </Text>
        </Box>

        <Box>
          <Heading size="lg" fontSize="20px">
            ⌚ Timer or manual entry
          </Heading>
          <Text fontSize="md">
            Start and stop your timer to record activities as you work. Or log
            hours manually afterwards.
          </Text>
        </Box>
        <Box>
          <Heading size="lg" fontSize="20px">
            📻 Clock-in, clock-out
          </Heading>
          <Text fontSize="md">
            Know the time spent on projects as well as hours of work and breaks.
          </Text>
        </Box>
        <Box>
          <Heading size="lg" fontSize="20px">
            ⌛ Estimates
          </Heading>
          <Text fontSize="md">
            Set time estimates so at any time you can see the time you spend and
            what is left.
          </Text>
        </Box>
        <Box>
          <Heading size="lg" fontSize="20px">
            🔔 Reminders
          </Heading>
          <Text fontSize="md">
            Receive notifications about long-running timers and reminders to
            track time.
          </Text>
        </Box>
        <Box>
          <Heading size="lg" fontSize="20px">
            ☔ Time off
          </Heading>
          <Text fontSize="md">
            Track paid time off, vacations, sick days and leave types.
          </Text>
        </Box>
        <Box>
          <Heading size="lg" fontSize="20px">
            🎰 Auto-stop timer
          </Heading>
          <Text fontSize="md">
            Configure to auto stop timer at the end of the workday.
          </Text>
        </Box>
        <Box>
          <Heading size="lg" fontSize="20px">
            ⏲️ Time log
          </Heading>
          <Text fontSize="md">
            All changes and estimates made to the task time are logged and
            available for revision.
          </Text>
        </Box>
        <Box>
          <Heading size="lg" fontSize="20px">
            🌟 Automate with Zapier
          </Heading>
          <Text fontSize="md">
            AUse Zapier for automatic data transfer between Everhour and 1000+
            apps with no technical knowledge.
          </Text>
        </Box>
        <Box>
          <Heading size="lg" fontSize="20px">
            📨 Browser extension
          </Heading>
          <Text fontSize="md">
            Track time right from your browser’s toolbar with a single click.
          </Text>
        </Box>
        <Box>
          <Heading size="lg" fontSize="20px">
            📱 iPhone app
          </Heading>
          <Text fontSize="md">
            Record time spent on projects and tasks from your iPhone.
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default Tour;
