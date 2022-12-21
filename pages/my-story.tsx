import Head from "next/head";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import {
  Box,
  Button,
  Flex,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import Stepper from "../components/Stepper";

const steps = [
  { label: "Step 1" },
  { label: "Step 2" },
  { label: "Step 3" },
  { label: "Step 4" },
  { label: "Step 5" },
  { label: "Step 6" },
  { label: "Step 7" },
  { label: "Step 8" },
  { label: "Step 9" },
  { label: "Step 9" },
  { label: "Step 9" },
  { label: "Step 9" },
  { label: "Step 10" },
];

const Newsletters = () => {
  const { nextStep, prevStep, reset, activeStep, setStep } = useSteps({
    initialStep: 0,
  });

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
        textAlign='center'
        fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
      >
        My Journey
      </Heading>
      {/* <Stepper /> */}
      <Flex flexDir='column' width={"6xl"} margin='0 auto'>
        <Steps activeStep={activeStep}>
          {steps.map(({ label }, index) => (
            <Step label={label} key={label}>
              <Box key={label}>Hello</Box>
            </Step>
          ))}
        </Steps>
        {activeStep === steps.length ? (
          <Flex px={4} py={4} width='100%' flexDirection='column'>
            <Heading fontSize='xl' textAlign='center'>
              Woohoo! All steps completed!
            </Heading>
            <Button mx='auto' mt={6} size='sm' onClick={reset}>
              Reset
            </Button>
          </Flex>
        ) : (
          <Flex width='100%' justify='flex-end'>
            <Button
              isDisabled={activeStep === 0}
              mr={4}
              onClick={prevStep}
              size='sm'
              variant='ghost'
            >
              Prev
            </Button>
            <Button size='sm' onClick={nextStep}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default Newsletters;
