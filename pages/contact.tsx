import Head from "next/head";
import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";
import Form from "../components/Form";
import PressCard from "../components/PressCard";

const Contact = () => {
  return (
    <>
      {/* <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title,
          description,
          url,
        }}
      /> */}
      <Head>
        <title>my story | tanaypratap</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Heading
        as='h2'
        fontWeight={700}
        textTransform='uppercase'
        lineHeight={1.2}
        my={6}
        textAlign='center'
        fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
      >
        Connect with me!
      </Heading>
      <Box maxW={"6xl"} m={"0 auto"}>
        <Form />
      </Box>
    </>
  );
};

export default Contact;
