import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Textarea,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { useState } from "react";

export default function Form({ type }: { type?: string }) {
  const [value, setValue] = useState("1");
  return (
    <Box>
      <Stack
        m={10}
        bg={"gray.50"}
        rounded={"xl"}
        p={{ base: 4, sm: 6, md: 8 }}
        spacing={{ base: 8 }}
      >
        <Stack spacing={4}>
          <Heading
            color={"gray.800"}
            lineHeight={1.1}
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
          >
            Join our team
            <Text
              as={"span"}
              bgGradient='linear(to-r, red.400,pink.400)'
              bgClip='text'
            >
              !
            </Text>
          </Heading>
          <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
            We’re looking for amazing engineers just like you! Become a part of
            our rockstar engineering team and skyrocket your career!
          </Text>
        </Stack>
        <Box as={"form"} mt={10}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Enter your full name</FormLabel>
              <Input
                placeholder='Fullname'
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Enter your email address</FormLabel>
              <Input
                placeholder='firstname@lastname.io'
                bg={"gray.100"}
                border={0}
                type='email'
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Enter your phone number</FormLabel>
              <Input
                placeholder='+91 8786878787 '
                type='number'
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
            </FormControl>
            {type === "media-kit" ? (
              <FormControl as='fieldset'>
                <FormLabel as='legend'>Choose your subject</FormLabel>
                <RadioGroup onChange={setValue} value={value}>
                  <Stack>
                    <Radio value='1'>First</Radio>
                    <Radio value='2'>Second</Radio>
                    <Radio value='3'>Third</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
            ) : null}
            <FormControl>
              <FormLabel>Enter your message</FormLabel>
              <Textarea
                placeholder='Here is a sample placeholder'
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
            </FormControl>
          </Stack>
          <Button
            fontFamily={"heading"}
            mt={8}
            w={"full"}
            bgGradient='linear(to-r, red.400,pink.400)'
            color={"white"}
            _hover={{
              bgGradient: "linear(to-r, red.400,pink.400)",
              boxShadow: "xl",
            }}
          >
            Submit
          </Button>
        </Box>
        form
      </Stack>
    </Box>
  );
}
