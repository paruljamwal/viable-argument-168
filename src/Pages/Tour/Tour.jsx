import React from "react";
import { Heading, Box, Text, Image } from "@chakra-ui/react";
import Review from "../../Components/Review/Review";
import { tourText } from "./TourReveiw.js";

const Tour = () => {
  return (
    <div>
      <Box
        justifyContent={"space-between"}
        padding={"50px 10px 20px 100px"}
        display={{ base: "block", md: "block", lg: "flex" }}
        mt="70px"
      >
        <Box>
          <Heading
            size="lg"
            pt={"50px"}
            fontWeight={"500"}
            fontSize="50px"
            mr={{ base: "18%", md: "0%", lg: "0%" }}
            textAlign={{ base: "center", md: "center", lg: "left" }}
          >
            Everything you need <br /> for workforce <br /> management
          </Heading>
          <Heading
            size="sm"
            pt={"20px"}
            fontWeight={"400"}
            fontSize="23px"
            color={"grey"}
            mr={{ base: "15%", md: "0%", lg: "0%" }}
            textAlign={{ base: "center", md: "center", lg: "left" }}
          >
            Everhour will make your daily job way easier <br /> and more
            organized
          </Heading>
        </Box>
        <Image
          src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/all-features-3.webp"
          alt=""
          mt={{ base: "5%", md: "5%", lg: "0%" }}
          w={{ base: "88%", md: "88%", lg: "650px" }}
        />
      </Box>

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
        gridTemplateColumns={{
          base: "repeat(2, 200px)",
          md: "repeat(2, 300px)",
          lg: "repeat(3, 300px)",
        }}
        gridTemplateRows={"repeat(250px , auto)"}
        height={"auto"}
        gap={"5%"}
        padding={"30px 20px"}
        justifyContent={"space-around"}
      >
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            ⭐ Seemless integrations
          </Heading>
          <br />
          <Text fontSize="md">
            Track time right inside the most popular apps, such as Asana,
            Basecamp, Jira, Trello, GitHub, ClickUp and more.
          </Text>
          <br />
          <hr />
          <br />
        </Box>

        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            ⌚ Timer or manual entry
          </Heading>
          <br />
          <Text fontSize="md">
            Start and stop your timer to record activities as you work. Or log
            hours manually afterwards.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            📻 Clock-in, clock-out
          </Heading>
          <br />
          <Text fontSize="md">
            Know the time spent on projects as well as hours of work and breaks.
            You can calculate the timming of indivisual project.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            ⌛ Estimates
          </Heading>
          <br />
          <Text fontSize="md">
            Set time estimates so at any time you can see the time you spend and
            what is left.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            🔔 Reminders
          </Heading>
          <br />
          <Text fontSize="md">
            Receive notifications about long-running timers and reminders to
            track time.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            ☔ Time off
          </Heading>
          <br />
          <Text fontSize="md">
            Track paid time off, vacations, sick days and leave types.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            🎰 Auto-stop timer
          </Heading>
          <br />
          <Text fontSize="md">
            Configure to auto stop timer at the end of the workday. Or your
            selecet day or with date.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            ⏲️ Time log
          </Heading>
          <br />
          <Text fontSize="md">
            All changes and estimates made to the task time are logged and
            available for revision.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            🌟 Automate with Zapier
          </Heading>
          <br />
          <Text fontSize="md">
            AUse Zapier for automatic data transfer between Everhour and 1000+
            apps with no technical knowledge.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            📨 Browser extension
          </Heading>
          <br />
          <Text fontSize="md">
            Track time right from your browser’s toolbar with a single click.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            📱 iPhone app
          </Heading>
          <br />
          <Text fontSize="md">
            Record time spent on projects and tasks from your iPhone.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
      </Box>

      {/* ----------- PART 3 ----------- */}

      <Heading
        size="sm"
        pt={"200px"}
        fontWeight={"500"}
        fontSize="35px"
        // color={"grey"}
        textAlign={"center"}
      >
        Billing and budgeting
      </Heading>
      <Heading
        size="sm"
        pt={"8px"}
        fontWeight={"400"}
        fontSize="20px"
        color={"grey"}
        textAlign={"center"}
      >
        Avoid debt and boost revenue with precise project billing and budgeting
      </Heading>
      <Box display={"flex"} justifyContent={"center"} p={"40px 0px"}>
        <img
          src="https://blog-cdn.everhour.com/assets/images/new-design/screens/projects-dashboard-v2.webp"
          alt=""
        />
      </Box>
      <Box
        display={"Grid"}
        gridTemplateColumns={{
          base: "repeat(2, 200px)",
          md: "repeat(2, 300px)",
          lg: "repeat(3, 300px)",
        }}
        gridTemplateRows={"repeat(250px , auto)"}
        height={"auto"}
        gap={"5%"}
        padding={"30px 20px"}
        justifyContent={"space-around"}
      >
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            📂 Manage clients
          </Heading>
          <br />
          <Text fontSize="md">
            Create clients, assign projects, watch budgets, spot uninvoiced
            time.
          </Text>
          <br />
          <hr />
          <br />
        </Box>

        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            💲 Flexible billing
          </Heading>
          <br />
          <Text fontSize="md">
            Choose an appropriate billing method: non-billable, time and
            materials or fixed fee.
          </Text>
          <br />
          <hr />
          <br />
        </Box>

        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            〽️ Budgets
          </Heading>
          <br />
          <Text fontSize="md">
            Set up a capital or recurring budget for your projects. Don’t let
            finances catch you by surprise.
          </Text>
          <br />
          <hr />
          <br />
        </Box>

        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            🕶️ Alerts
          </Heading>
          <br />
          <Text fontSize="md">
            Receive an email alert when you reach a certain percentage of the
            project budget.
          </Text>
          <br />
          <hr />
          <br />
        </Box>

        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            💸 Labor costs
          </Heading>
          <br />
          <Text fontSize="md">
            Track what an employee or contractor costs you compared to how much
            you charge for their work.
          </Text>
          <br />
          <hr />
          <br />
        </Box>

        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            💰 Non-billable time
          </Heading>
          <br />
          <Text fontSize="md">
            Exclude certain tasks from the billable amount calculation.
          </Text>
          <br />
          <hr />
          <br />
        </Box>

        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            ➖ Disallow overbudget
          </Heading>
          <br />
          <Text fontSize="md">
            Budget settings allow you to prohibit reporting time for anyone if
            the budget is exceeded.
          </Text>
          <br />
          <hr />
          <br />
        </Box>

        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            💲✏️ Custom task rates
          </Heading>
          <br />
          <Text fontSize="md">
            You can override the base rate for a project and assign a specific
            rate to each task.
          </Text>
          <br />
          <hr />
          <br />
        </Box>

        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            〽️ Budgets
          </Heading>
          <br />
          <Text fontSize="md">
            Decide if members can see a project’s budget, which is visible to
            admins only by default.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
      </Box>

      {/* ----------- PART 4 Managing tasks ----------- */}

      <Heading
        size="sm"
        pt={"200px"}
        fontWeight={"500"}
        fontSize="35px"
        // color={"grey"}
        textAlign={"center"}
      >
        Managing tasks
      </Heading>
      <Heading
        size="sm"
        pt={"8px"}
        fontWeight={"400"}
        fontSize="20px"
        color={"grey"}
        textAlign={"center"}
      >
        Project management and time tracking with our all-in-one solution
      </Heading>
      <Box display={"flex"} justifyContent={"center"} p={"40px 0px"}>
        <img
          src="https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/projects-board-view-v3.webp"
          alt=""
        />
      </Box>
      <Box
        display={"Grid"}
        gridTemplateColumns={{
          base: "repeat(2, 200px)",
          md: "repeat(2, 300px)",
          lg: "repeat(3, 300px)",
        }}
        gridTemplateRows={"repeat(250px , auto)"}
        height={"auto"}
        gap={"5%"}
        padding={"30px 20px"}
        justifyContent={"space-around"}
      >
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            📂 Manage tasks
          </Heading>
          <br />
          <Text fontSize="md">
            Create new tasks in seconds, set priorities, deadlines and assign to
            the team.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Use sections and tags
          </Heading>
          <br />
          <Text fontSize="md">
            Use tags and sections to organize, and add context, to your tasks.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            List or Board views
          </Heading>
          <br />
          <Text fontSize="md">
            Whether you prefer board or list views for your project tasks, we
            have you covered.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Copy templates
          </Heading>
          <br />
          <Text fontSize="md">
            Copy project with tasks and estimates to start new similar projects
            in minutes.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Estimates
          </Heading>
          <br />
          <Text fontSize="md">
            Set time estimates so at any time you can see the time you spend and
            what is left.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Archive
          </Heading>
          <br />
          <Text fontSize="md">
            Archive projects that you no longer need. We keep all time and data
            preserved.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
      </Box>

      {/* ----------- PART 5 Visual projects and employee scheduling ----------- */}

      <Heading
        size="sm"
        pt={"200px"}
        fontWeight={"500"}
        fontSize="35px"
        // color={"grey"}
        textAlign={"center"}
      >
        Visual projects and employee scheduling
      </Heading>
      <Heading
        size="sm"
        pt={"8px"}
        fontWeight={"400"}
        fontSize="20px"
        color={"grey"}
        textAlign={"center"}
      >
        Map out your plans and see them with clarity
      </Heading>
      <Box display={"flex"} justifyContent={"center"} p={"40px 0px"}>
        <img
          src="https://blog-cdn.everhour.com/assets/images/new-design/screens/resource-planning-members-new-v2.webp"
          alt=""
        />
      </Box>
      <Box
        display={"Grid"}
        gridTemplateColumns={{
          base: "repeat(2, 200px)",
          md: "repeat(2, 300px)",
          lg: "repeat(3, 300px)",
        }}
        gridTemplateRows={"repeat(250px , auto)"}
        height={"auto"}
        gap={"5%"}
        padding={"30px 20px"}
        justifyContent={"space-around"}
      >
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Visualize
          </Heading>
          <br />
          <Text fontSize="md">
            View an interactive plan with your team’s schedule or project
            portfolio on one page.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Plan vs reported
          </Heading>
          <br />
          <Text fontSize="md">
            See the progress of logged time vs. scheduled time of every team
            member.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Resource availability
          </Heading>
          <br />
          <Text fontSize="md">
            Know when someone with the necessary expertise will be available for
            a new project.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Absence
          </Heading>
          <br />
          <Text fontSize="md">
            Add your team’s leave or holidays to the schedule to keep records
            and avoid conflicts.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box>
          <Heading size="lg" fontSize="20px">
            Filter
          </Heading>
          <br />
          <Text fontSize="md">
            Zoom in & out, search, filter and sort to quickly view specific team
            members and assignments.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box>
          <Heading size="lg" fontSize="20px">
            Avoid overbooking
          </Heading>
          <br />
          <Text fontSize="md">
            Configure weekly capacity and see who’s overbooked and who can take
            on more.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
      </Box>

      {/* ----------- PART 6 Team management----------- */}

      <Heading
        size="sm"
        pt={"200px"}
        fontWeight={"500"}
        fontSize="35px"
        // color={"grey"}
        textAlign={"center"}
      >
        Team management
      </Heading>
      <Heading
        size="sm"
        pt={"8px"}
        fontWeight={"400"}
        fontSize="20px"
        color={"grey"}
        textAlign={"center"}
      >
        Your team's working hours, now more organized and easy to read
      </Heading>
      <Box display={"flex"} justifyContent={"center"} p={"40px 0px"}>
        <img
          src="https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/summary-dashboard-v4.webp"
          alt=""
        />
      </Box>
      <Box
        display={"Grid"}
        gridTemplateColumns={{
          base: "repeat(2, 200px)",
          md: "repeat(2, 300px)",
          lg: "repeat(3, 300px)",
        }}
        gridTemplateRows={"repeat(250px , auto)"}
        height={"auto"}
        gap={"5%"}
        padding={"30px 20px"}
        justifyContent={"space-around"}
      >
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Summary charts
          </Heading>
          <br />
          <Text fontSize="md">
            Quickly evaluate what is going on in your team, and how everyone is
            performing.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Time approval
          </Heading>
          <br />
          <Text fontSize="md">
            Be notified when someone submits timesheets for approval. Lock
            further editing.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Lock time editing
          </Heading>
          <br />
          <Text fontSize="md">
            Set a rule to prevent members editing time entries after a certain
            period.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Correct employee time
          </Heading>
          <br />
          <Text fontSize="md">
            Admins can easily edit time on behalf of their team members if there
            was a mistake.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Time log
          </Heading>
          <br />
          <Text fontSize="md">
            All changes and estimates made to the task time are logged and
            available for revision.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Roles and permissions
          </Heading>
          <br />
          <Text fontSize="md">
            Control the access of different users in your team to features and
            data.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Deactivating users
          </Heading>
          <br />
          <Text fontSize="md">
            Deactivate any user but still see all their logged time in reports.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Team groups
          </Heading>
          <br />
          <Text fontSize="md">
            Group organization members into teams that reflect your company
            structure.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Max hours limits
          </Heading>
          <br />
          <Text fontSize="md">
            Set the maximum number of hours a contractor can report. Set it
            daily, weekly or monthly.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
      </Box>

      {/* ----------- PART 7 Tracking expenses----------- */}

      <Heading
        size="sm"
        pt={"200px"}
        fontWeight={"500"}
        fontSize="35px"
        // color={"grey"}
        textAlign={"center"}
      >
        Tracking expenses
      </Heading>
      <Heading
        size="sm"
        pt={"8px"}
        fontWeight={"400"}
        fontSize="20px"
        color={"grey"}
        textAlign={"center"}
      >
        Track work-related expenses, reimburse employees, use in budgets, add to
        invoices
      </Heading>
      <Box display={"flex"} justifyContent={"center"} p={"40px 0px"}>
        <img
          src="https://blog-cdn.everhour.com/assets/images/new-design/screens/expenses.webp"
          alt=""
        />
      </Box>
      <Box
        display={"Grid"}
        gridTemplateColumns={{
          base: "repeat(2, 200px)",
          md: "repeat(2, 300px)",
          lg: "repeat(3, 300px)",
        }}
        gridTemplateRows={"repeat(250px , auto)"}
        height={"auto"}
        gap={"5%"}
        padding={"30px 20px"}
        justifyContent={"space-around"}
      >
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Track expenses
          </Heading>
          <br />
          <Text fontSize="md">
            Track work-related expenses such as materials, travel, and others
            incurred on the job.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Attach receipts
          </Heading>
          <br />
          <Text fontSize="md">
            Upload and save a receipt when you add an expense.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Unit pricing
          </Heading>
          <br />
          <Text fontSize="md">
            Instead of entering the bare sum, switch on the unit price per
            expense category.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
      </Box>

      {/* ----------- PART 8 Reports and dashboards----------- */}

      <Heading
        size="sm"
        pt={"200px"}
        fontWeight={"500"}
        fontSize="35px"
        // color={"grey"}
        textAlign={"center"}
      >
        Reports and dashboards
      </Heading>
      <Heading
        size="sm"
        pt={"8px"}
        fontWeight={"400"}
        fontSize="20px"
        color={"grey"}
        textAlign={"center"}
      >
        Analytics to aid productivity or boost confidence with your clients
      </Heading>
      <Box display={"flex"} justifyContent={"center"} p={"40px 0px"}>
        <img
          src="https://blog-cdn.everhour.com/assets/images/new-design/screens/reports.webp"
          alt=""
        />
      </Box>
      <Box
        display={"Grid"}
        gridTemplateColumns={{
          base: "repeat(2, 200px)",
          md: "repeat(2, 300px)",
          lg: "repeat(3, 300px)",
        }}
        gridTemplateRows={"repeat(250px , auto)"}
        height={"auto"}
        gap={"5%"}
        padding={"30px 20px"}
        justifyContent={"space-around"}
      >
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Custom reports
          </Heading>
          <br />
          <Text fontSize="md">
            Use filters, arrange columns, and add conditions to get the reports
            you need.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Meta data
          </Heading>
          <br />
          <Text fontSize="md">
            Analyze tasks deeper with access to such meta information as tags,
            task types or milestones.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Sharing
          </Heading>
          <br />
          <Text fontSize="md">
            Make any report private or share it with a group of teammates.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Download
          </Heading>
          <br />
          <Text fontSize="md">
            Export your data to send them to the client or to do some internal
            math.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Highlighting
          </Heading>
          <br />
          <Text fontSize="md">
            Highlight various pieces of data in individual cells of your
            reports.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Schedule by email
          </Heading>
          <br />
          <Text fontSize="md">
            Schedule any report to be sent to a list of specified emails on a
            daily, weekly, or monthly basis.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
      </Box>

      {/* ----------- PART 9 Sending invoices ----------- */}

      <Heading
        size="sm"
        pt={"200px"}
        fontWeight={"500"}
        fontSize="35px"
        // color={"grey"}
        textAlign={"center"}
      >
        Sending invoices
      </Heading>
      <Heading
        size="sm"
        pt={"8px"}
        fontWeight={"400"}
        fontSize="20px"
        color={"grey"}
        textAlign={"center"}
      >
        Easily create an invoice based on tracked time and expenses
      </Heading>
      <Box display={"flex"} justifyContent={"center"} p={"40px 0px"}>
        <img
          src="https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/invoices-preview-v3.webp"
          alt=""
        />
      </Box>
      <Box
        display={"Grid"}
        gridTemplateColumns={{
          base: "repeat(2, 200px)",
          md: "repeat(2, 300px)",
          lg: "repeat(3, 300px)",
        }}
        b
        height={"auto"}
        gap={"5%"}
        padding={"30px 20px"}
        justifyContent={"space-around"}
      >
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Create invoices
          </Heading>
          <br />
          <Text fontSize="md">
            Easily create an invoice based on tracked time and expenses.
          </Text>
          {/* <br /> */}
          {/* <hr /> */}
          <br />
        </Box>
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Flexible grouping
          </Heading>
          <br />
          <Text fontSize="md">
            Use special dynamic variables, that will be replaced with a real
            data in the invoice line items.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Change language
          </Heading>
          <br />
          <Text fontSize="md">
            English language is used by default, but you can translate any
            invoice label.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Copy invoices
          </Heading>
          <br />
          <Text fontSize="md">
            Connect with QuickBooks, Xero or FreshBooks to sync your clients and
            copy invoices.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Track opens
          </Heading>
          <br />
          <Text fontSize="md">
            We show you the exact time a client opens the invoice email you sent
            them.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Download
          </Heading>
          <br />
          <Text fontSize="md">
            Make the final check of your future invoice and download a PDF file.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Internal notes
          </Heading>
          <br />
          <Text fontSize="md">
            Add internal only, not for customers access, notes on invoices about
            cost of product or code for future invoices.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Log changes
          </Heading>
          <br />
          <Text fontSize="md">
            All invoices have a log so that you can see which users have changed
            what and when.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
        <Box textAlign={"start"}>
          <Heading size="lg" fontSize="20px">
            Integrations
          </Heading>
          <br />
          <Text fontSize="md">
            Connect with QuickBooks or Xero to sync your clients and copy
            invoices.
          </Text>
          <br />
          <hr />
          <br />
        </Box>
      </Box>

      {/* ----------- NEXT PART  ----------- */}

      <Heading
        size="sm"
        pt={"200px"}
        fontWeight={"500"}
        fontSize="39px"
        // color={"grey"}
        textAlign={"center"}
      >
        You are in a good company
      </Heading>
      <Heading
        width={{ base: "300px", md: "500px", lg: "800px" }}
        size="sm"
        pt={"8px"}
        fontWeight={"400"}
        fontSize="21px"
        color={"grey"}
        margin={"auto"}
        textAlign={"center"}
      >
        We could tell you about the thousands of companies worldwide that use
        our software for their timekeeping needs… but we thought it best they
        speak for themselves.
      </Heading>
      <br />
      <br />
      <br />
      <br />
      <Review tourText={tourText} />
    </div>
  );
};

export default Tour;
