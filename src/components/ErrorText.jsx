import { Text } from "@chakra-ui/react";

const ErrorText = ({ message }) => {
  if (!message) return null;
  return <Text textStyle="errorMessage.danger">{message}</Text>;
};

export default ErrorText;
