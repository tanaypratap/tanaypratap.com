import "../styles/globals.css";
import Navbar from "../components/Layout/Navbar";
import { NextRouter, useRouter } from "next/router";
import Footer from "../components/Layout/Footer";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  const router: NextRouter = useRouter();

  return (
    <div className='app-container'>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default MyApp;
