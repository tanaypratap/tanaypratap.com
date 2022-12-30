import Head from "next/head";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  FlexProps,
  useBreakpointValue,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import Stepper from "../components/Stepper";
import Form from "../components/Form";
import PressCard from "../components/PressCard";

const MediaKit = () => {
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
        <Form type='media-kit' />
      </Box>
      <Heading
        as='h2'
        fontWeight={700}
        textTransform='uppercase'
        lineHeight={1.2}
        my={6}
        textAlign='center'
        fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
      >
        Recent Press
      </Heading>
      <Box maxW={"6xl"} m={"0 auto"}>
        <SimpleGrid columns={{ sm: 2, md: 3 }} spacing='40px'>
          <PressCard />
          <PressCard />
          <PressCard />
          <PressCard />
          <PressCard />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default MediaKit;
