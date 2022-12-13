import { ReactNode } from "react";
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";

export default function AreasOfInterest() {
  return (
    <Box position={"relative"} p='4rem 0'>
      <Heading
        as='h2'
        fontWeight={700}
        textTransform='uppercase'
        textAlign='center'
      >
        Areas of Interest
      </Heading>
      <Stack direction={{ base: "column", lg: "row" }} m={"0 13%"}>
        <Stack flex={1} justify={{ lg: "center" }} m='2rem 0'>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {stats.map((stat) => (
              <Box
                key={stat.title}
                p='3rem'
                borderRadius={"1rem"}
                boxShadow='md'
              >
                <Text
                  fontFamily={"heading"}
                  textAlign='left'
                  fontSize={"3xl"}
                  mb={3}
                >
                  {stat.title}
                </Text>
                <Divider
                  width='100px'
                  borderTop='3px solid #1a365d'
                  marginBottom='0.5rem'
                />
                <Text fontSize={"xl"}>{stat.content}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Stack>
    </Box>
  );
}

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={"span"} fontWeight={700}>
    {children}
  </Text>
);

const stats = [
  {
    title: "Entrepreneurship",
    content: (
      <>
        <StatsText>Software modules</StatsText> for detailed monitoring and
        real-time analytics. Lorem ipsum dolor sit amet consectetur adipisicing
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        nesciunt. elit. Reiciendis, nesciunt.
      </>
    ),
  },
  {
    title: "Mentorship",
    content: (
      <>
        <StatsText>Analytics</StatsText> enabled right in your dashboard without
        history limitations. Lorem ipsum dolor sit amet consectetur adipisicing
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        nesciunt. elit. Reiciendis, nesciunt.
      </>
    ),
  },
  {
    title: "Author",
    content: (
      <>
        <StatsText>Farms</StatsText> in North America has chosen NewLife™ as
        their management solution. Lorem ipsum dolor sit amet consectetur Lorem
        ipsum dolor sit amet consectetur adipisicing elit adipisicing elit.
        Reiciendis, nesciunt.
      </>
    ),
  },
  {
    title: "Technology",
    content: (
      <>
        <StatsText>Plants</StatsText> currently connected and monitored by the
        NewLife™ software. Lorem ipsum dolor sit amet consectetur adipisicing
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        nesciunt. elit. Reiciendis, nesciunt.
      </>
    ),
  },
];
