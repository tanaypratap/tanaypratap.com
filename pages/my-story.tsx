import Head from "next/head";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import {
  Box,
  Button,
  Flex,
  Heading,
  FlexProps,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import Stepper from "../components/Stepper";

type ContentProps = FlexProps & {
  index: number;
};

const Content = ({ index, ...rest }: ContentProps) => {
  const bg = useColorModeValue("gray.200", "gray.700");
  return (
    <Flex
      p={6}
      bg={bg}
      rounded='md'
      width='100%'
      align='center'
      my={10}
      justify='center'
      {...rest}
    >
      <Text>Step {index + 1}</Text>
    </Flex>
  );
};

const steps = [
  { label: "1990" },
  { label: "2000" },
  { label: "2003" },
  { label: "2005" },
  { label: "2008" },
  { label: "2010" },
  { label: "2015" },
  { label: "2019" },
  { label: "2020" },
  { label: "2022" },
];

const MyStory = () => {
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
        my={6}
        fontWeight={700}
        textTransform='uppercase'
        lineHeight={1.2}
        textAlign='center'
        fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
      >
        My Journey
      </Heading>
      {/* <Flex
        flexDir='column'
        width={"6xl"}
        margin='0 auto'
        height='200px'
        // width='100%'
        overflow={"hidden"}
        border='1px solid black'
      >
        <Steps
          activeStep={activeStep}
          overflow={"auto"}
          height='200px'
          width='100%'
        >
          {steps.map(({ label }, index) => (
            <Step overflow={"auto"} label={label} key={label} width={"200px"}>
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
      </Flex> */}
      <Flex flexDir='column' width={"6xl"} margin='0 auto'>
        <Steps
          className='timeline'
          onClickStep={(step) => setStep(step)}
          activeStep={activeStep}
        >
          {steps.map(({ label }, index) => {
            return (
              <Step label={label} key={label} overflow={"auto"} width={"200px"}>
                <Content index={index} />
              </Step>
            );
          })}
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

      <Heading
        as='h2'
        fontWeight={700}
        textTransform='uppercase'
        lineHeight={1.2}
        my={6}
        textAlign='center'
        fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
      >
        My Story
      </Heading>
    </>
  );
};

export default MyStory;
