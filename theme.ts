// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const fonts = {
  body: `"Anek Latin", sans-serif`,
  heading: `"Anek Latin", sans-serif`,
};

export const theme = extendTheme({
  colors,
  fonts,
  components: {
    Steps,
  },
});
