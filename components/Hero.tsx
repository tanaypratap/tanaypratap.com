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
            Snippy is a rich coding snippets app that lets you create your own
            code snippets, categorize them, and even sync them in the cloud so
            you can use them anywhere. All that is free! Snippy is a rich coding
            snippets app that lets you create your own code snippets, categorize
            them, and even sync them in the cloud so you can use them anywhere.
            All that is free! Snippy is a rich coding snippets app that lets you
            create your own code snippets. Snippy is a rich coding snippets app
            that lets you create your own code snippets, categorize them, and
            even sync them.
            <br />
            Snippy is a rich coding snippets app that lets you create your own
            code snippets, categorize them, and even sync them in the cloud so
            you can use them anywhere. All that is free! Snippy is a rich coding
            snippets app that lets you create your own code snippets, categorize
            them, and even sync them in the cloud so you can use them anywhere.
            <br />
            Even sync them in the cloud so you can use them anywhere. All that
            is free! Snippy is a rich coding
            <br />
            <Link href='/about'>
              <Text
                color='blue.600'
                fontSize='20'
                fontWeight='medium'
                py='0.4rem '
              >
                Read the whole story!
              </Text>
            </Link>
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
