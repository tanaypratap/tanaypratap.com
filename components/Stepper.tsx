import { Step, Steps, useSteps } from "chakra-ui-steps";
import { Center, Box, Button } from "@chakra-ui/react";

const Stepper = () => {
  const {
    nextStep,
    prevStep,
    // reset,
    activeStep,
  } = useSteps({
    initialStep: 1,
  });

  return (
    <Box width='100%'>
      <Steps activeStep={activeStep}>
        <Step key={2}></Step>
        <Step label={"User Login"} key={1}>
          hihi
        </Step>
        <Step label={"Interests"} key={2}>
          haha
        </Step>
        <Step label={"Portfolio"} key={3}>
          hehe
        </Step>
        <Step label={"Review"} key={4}>
          Content
        </Step>
      </Steps>
      <Center>
        <Button
          onClick={() => {
            prevStep();
          }}
        >
          Previous
        </Button>
        <Box pl={5}></Box>
        <Button
          onClick={() => {
            nextStep();
          }}
        >
          Forward
        </Button>
      </Center>
    </Box>
  );
};

export default Stepper;
