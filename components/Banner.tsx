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

export default function Banner() {
  return (
    <Center
      height={"90vh"}
      // backgroundImage={`url("./images/tanay-banner.jpg") !important`}
      // backgroundPosition='center'
      // backgroundRepeat='no-repeat'
      // backgroundSize={"cover"}
    >
      {/* <Box
        as='video'
        controls
        autoPlay
        muted
        loop
        position='fixed'
        right=' 0'
        bottom=' 0'
        min-width=' 100%'
        min-height=' 100%'
        src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
        poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
        objectFit='contain'
        sx={{
          aspectRatio: "16/9",
        }}
      /> */}

      <Stack maxW={"2xl"} textAlign='center' spacing={6}>
        <Heading
          as='h1'
          fontWeight={700}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
        >
          Tanay Pratap
        </Heading>
        <Stack direction={"row"}>
          <Heading
            as='h4'
            size={useBreakpointValue({ base: "initial", md: "md" })}
          >
            Entrepreneur | Teacher | Author | Mentor | Engineer
          </Heading>
        </Stack>
      </Stack>
    </Center>
  );
}
