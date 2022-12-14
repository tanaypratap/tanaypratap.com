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
  HStack,
} from "@chakra-ui/react";
import {
  Container,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Hero({
  title,
  image,
}: {
  title: string;
  image?: boolean;
}) {
  return (
    <Container maxW={"6xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 7 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            textAlign={{ md: "center", lg: "initial" }}
          >
            {title}
          </Heading>
          <Text fontSize={"lg"} lineHeight='1.5'>
            I have spent my entire life working as an engineer and moonlighting
            as a teacher. I resigned from my position at Microsoft because I
            believe education is still an unsolved problem, and I am now totally
            dedicated to ensuring that everyone can access education, not just
            the wealthy few. I'm working on implementing the tried and testing
            model of closing the skill gap between technical and engineering
            roles into non-technical and business roles.
            <br />
            I believe that your work should become your degree, and your craft
            should become your credentials. So, currently working on providing
            students with a curriculum of proof of work and industry-focused
            courses in an affordable and accessible manner through Invact. Want
            to know how? It's a long story, so follow me to learn more. I am
            telling it in parts every day.
            <br />
            <br />
            {/* <Link href='/about'>
              <Text
                color='blue.600'
                fontSize='20'
                fontWeight='medium'
                py='0.4rem '
              >
                Read the whole story!
              </Text>
            </Link> */}
          </Text>
        </Stack>
        {image && (
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              height={"500px"}
              rounded={"xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={"/tanay.png"}
              />
            </Box>
          </Flex>
        )}
      </Stack>
    </Container>
  );
}
