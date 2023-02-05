import React from "react";
import { Flex } from "@chakra-ui/react";
import AuthButtons from "./AuthButtons";
import AuthModel from "../../../Model/Auth/AuthModel";

type RightContentProps = {
};

const RightContent: React.FC<RightContentProps> = () => {
  return (
    <>
      <AuthModel/>
      <Flex justifyContent="space-between" alignItems="center">
         <AuthButtons />
      </Flex>
    </>
  );
};
export default RightContent;