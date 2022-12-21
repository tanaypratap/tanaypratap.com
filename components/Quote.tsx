import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Box,
  Center,
  Heading,
} from "@chakra-ui/react";

export default function Quote() {
  return (
    <Center my='2rem'>
      <Stack textAlign='center' spacing={6}>
        <Heading
          as='h2'
          fontWeight={700}
          textTransform='uppercase'
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
        >
          “Being the mentor I never had” ~ Tanay Pratap
        </Heading>
      </Stack>
    </Center>
  );
}
