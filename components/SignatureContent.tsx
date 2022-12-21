import { Stack, useBreakpointValue, Center, Heading } from "@chakra-ui/react";

export default function SignatureContent() {
  return (
    <Center>
      <Stack textAlign='center' spacing={6}>
        <Heading
          as='h2'
          fontWeight={700}
          textTransform='uppercase'
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
        >
          Tanay’s signature content
        </Heading>
      </Stack>
    </Center>
  );
}
