import { Box } from "@chakra-ui/react";
import React from "react";

const ShapeType = ({ type }) => {
  if (type === "text") return null;
  return (
    <Box
      w="20px"
      h="20px"
      border="2px solid"
      borderRadius={type === "radiogroup" ? "50%" : "0px"}
      borderColor="#bbb"
    />
  );
};

export default ShapeType;
