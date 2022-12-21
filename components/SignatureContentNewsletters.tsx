import { Stack, useBreakpointValue, Center, Heading } from "@chakra-ui/react";
import {
  Box,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from "@chakra-ui/react";

export default function SignatureContentNewsletters() {
  return (
    <Container maxW={"7xl"} p='12'>
      <Heading as='h1'>Stories by Chakra Templates</Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display='flex'
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent='space-between'
      >
        <Box
          display='flex'
          flex='1'
          marginRight='3'
          position='relative'
          alignItems='center'
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex='2'
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop='5%'
          >
            <Link textDecoration='none' _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius='lg'
                src={
                  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                }
                alt='some good alt text'
                objectFit='contain'
              />
            </Link>
          </Box>
          <Box zIndex='1' width='100%' position='absolute' height='100%'>
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize='20px 20px'
              opacity='0.4'
              height='100%'
            />
          </Box>
        </Box>
        <Box
          display='flex'
          flex='1'
          flexDirection='column'
          justifyContent='center'
          marginTop={{ base: "3", sm: "0" }}
        >
          <BlogTags tags={["Engineering", "Product"]} />
          <Heading marginTop='1'>
            <Link textDecoration='none' _hover={{ textDecoration: "none" }}>
              Blog article title
            </Link>
          </Heading>
          <Text
            as='p'
            marginTop='2'
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize='lg'
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <BlogAuthor name='John Doe' date={new Date("2021-04-06T19:01:27Z")} />
        </Box>
      </Box>
      <Heading as='h2' marginTop='5'>
        Latest articles
      </Heading>
      <Divider marginTop='5' />
      <Wrap spacing='30px' marginTop='5'>
        <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
          <Box w='100%'>
            <Box borderRadius='lg' overflow='hidden'>
              <Link textDecoration='none' _hover={{ textDecoration: "none" }}>
                <Image
                  transform='scale(1.0)'
                  src={
                    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                  }
                  alt='some text'
                  objectFit='contain'
                  width='100%'
                  transition='0.3s ease-in-out'
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                />
              </Link>
            </Box>
            <BlogTags tags={["Engineering", "Product"]} marginTop='3' />
            <Heading fontSize='xl' marginTop='2'>
              <Link textDecoration='none' _hover={{ textDecoration: "none" }}>
                Some blog title
              </Link>
            </Heading>
            <Text as='p' fontSize='md' marginTop='2'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </Box>
        </WrapItem>
        <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
          <Box w='100%'>
            <Box borderRadius='lg' overflow='hidden'>
              <Link textDecoration='none' _hover={{ textDecoration: "none" }}>
                <Image
                  transform='scale(1.0)'
                  src={
                    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                  }
                  alt='some text'
                  objectFit='contain'
                  width='100%'
                  transition='0.3s ease-in-out'
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                />
              </Link>
            </Box>
            <BlogTags tags={["Engineering", "Product"]} marginTop='3' />
            <Heading fontSize='xl' marginTop='2'>
              <Link textDecoration='none' _hover={{ textDecoration: "none" }}>
                Some blog title
              </Link>
            </Heading>
            <Text as='p' fontSize='md' marginTop='2'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </Box>
        </WrapItem>
        <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
          <Box w='100%'>
            <Box borderRadius='lg' overflow='hidden'>
              <Link textDecoration='none' _hover={{ textDecoration: "none" }}>
                <Image
                  transform='scale(1.0)'
                  src={
                    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                  }
                  alt='some text'
                  objectFit='contain'
                  width='100%'
                  transition='0.3s ease-in-out'
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                />
              </Link>
            </Box>
            <BlogTags tags={["Engineering", "Product"]} marginTop='3' />
            <Heading fontSize='xl' marginTop='2'>
              <Link textDecoration='none' _hover={{ textDecoration: "none" }}>
                Some blog title
              </Link>
            </Heading>
            <Text as='p' fontSize='md' marginTop='2'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </Box>
        </WrapItem>
      </Wrap>
    </Container>
  );
}

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant='solid' colorScheme='orange' key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop='2' spacing='2' display='flex' alignItems='center'>
      <Image
        borderRadius='full'
        boxSize='40px'
        src='https://100k-faces.glitch.me/random-image'
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight='medium'>{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};
