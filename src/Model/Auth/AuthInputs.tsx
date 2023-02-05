import { Flex } from "@chakra-ui/react";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { authModalState } from "../../atoms/authModelAtom";
import Login from "./Login";

type AuthInputsProps = {
};

const AuthInputs: React.FC<AuthInputsProps> = () => {
  const modalState = useRecoilValue(authModalState);

  return (
    <Flex direction="column" alignItems="center" width="100%" mt={4}>
      {modalState.view === "login" ? (
        <Login/>
      ) : (
        //<SignUp/>
        <Flex>
            Sign Up
        </Flex>
      )}
    </Flex>
  );
};
export default AuthInputs;