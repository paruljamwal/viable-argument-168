import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const Reviews = ({ tourText }) => {
  console.log(tourText);
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      templateRows={"auto"}
      gap={10}
      width={"85%"}
      margin={"auto"}
      marginTop={"160px"}
      mb={"4rem"}
    >
      {tourText.map((e) => {
        return (
          <Box
            border={"1px solid grey"}
            padding={"20px"}
            borderRadius={"8px"}
            key={e.id}
          >
            <GridItem> {e.text}</GridItem>
            <GridItem> {e.name}</GridItem>
          </Box>
        );
      })}
    </Grid>
  );
};

export default Reviews;
