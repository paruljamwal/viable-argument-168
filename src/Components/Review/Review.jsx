import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const Review = ({ tourText }) => {
  console.log(tourText);
  return (
    <Grid
      gridTemplateColumns={{
        base: "repeat(2, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      templateRows={"auto"}
      gap={10}
      width={"85%"}
      margin={"auto"}
      //   justifyContent={"space-around"}
    >
      {tourText.map((e) => {
        return (
          <Box border={"1px solid grey"} padding={"20px"} borderRadius={"8px"}>
            <GridItem> {e.text}</GridItem>
            <GridItem> {e.name}</GridItem>
          </Box>
        );
      })}
    </Grid>
  );
};

export default Review;
