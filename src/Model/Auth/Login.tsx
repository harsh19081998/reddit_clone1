import React, { useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import InputItem from "../../components/Layout/InputItem";

type LoginProps = {
};

const Login: React.FC<LoginProps> = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form>
      <InputItem
        name="email"
        placeholder="email"
        type="text"
        onChange={onChange}
        mb={2}
      />
      <InputItem
        name="password"
        placeholder="password"
        type="password"
        onChange={onChange}
      />
      <Text textAlign="center" mt={2} fontSize="10pt" color="red">
        Error
      </Text>
      <Button
        width="100%"
        height="36px"
        mb={2}
        mt={2}
        type="submit"
      >
        Log In
      </Button>
      <Flex justifyContent="center" mb={2}>
        <Text fontSize="9pt" mr={1}>
          Forgot your password?
        </Text>
        <Text
          fontSize="9pt"
          color="blue.500"
          cursor="pointer"
        >
          Reset
        </Text>
      </Flex>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>New here?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
        >
          SIGN UP
        </Text>
      </Flex>
    </form>
  );
};
export default Login;