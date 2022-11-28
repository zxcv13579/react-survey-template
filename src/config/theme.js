import { extendTheme } from "@chakra-ui/react";

const themeColor = {
  styles: {
    global: {
      body: {
        backgroundColor: "#f4f7fd",
        p: "20px",
      },
    },
  },
  colors: {
    primary: {
      1000: "#071735",
      900: "#21365f",
      800: "#304e81",
      700: "#42629d",
      600: "#6c85b4",
      500: "#96a9cc",
      400: "#c0cce3",
      300: "#d5deef",
      200: "#eaf0fb",
      100: "#f4f7fd",
    },
    status: {
      warning: "#ffa100",
      danger: "#f54d3d",
      success: "#009e5a",
    },
  },
  // textStyle prop
  textStyles: {
    errorMessage: {
      danger: {
        marginTop: 2,
        fontSize: "14px",
        fontWeight: "bold",
        color: "status.danger",
      },
    },
    h4: {},
  },
  // component prop
  components: {
    Container: {
      variants: {
        primary: {
          p: 4,
          borderRadius: "12px",
          bgColor: "#FFF",
          maxW: "100%",
          boxShadow: "lg",
        },
      },
    },
  },
};

export default extendTheme(themeColor);
