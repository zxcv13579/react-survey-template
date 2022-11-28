import { useToast } from "@chakra-ui/react";

const useCustomToast = () => {
  const toast = useToast();
  const config = {
    duration: 2000,
    isClosable: true,
    position: "top",
  };
  return {
    success: (title, description) =>
      toast({
        ...config,
        title,
        description,
        status: "success",
      }),
    error: (title, description) =>
      toast({
        ...config,
        title,
        description,
        status: "error",
      }),
  };
};

export default useCustomToast;
