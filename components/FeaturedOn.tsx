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
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";
import { featuredOnContent } from "../content/featured-on.content";

export default function FeaturedOn() {
  return (
    <Center>
      <Stack textAlign='center' spacing={6}>
        <Heading
          as='h2'
          fontWeight={700}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          textTransform='uppercase'
          my='2rem'
        >
          As featured on
        </Heading>
        <SimpleGrid columns={{ base: 2, sm: 4, md: 7 }} spacing={2}>
          {featuredOnContent.map((name) => {
            return (
              <Heading as='h4' size={{ base: "initial", md: "md" }} key={name}>
                {name}{" "}
              </Heading>
            );
          })}
        </SimpleGrid>
      </Stack>
    </Center>
  );
}
