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
        Although I studied engineering, I eventually realized that a degree was
        not worth anything. That is when I recognized that other students were
        struggling with the same issue. They were earning degrees, but those
        degrees were not helping them get jobs. Having been an engineer all my
        life, I wanted to engineer a solution. As a result, I ran jobChallenge,
        in which I helped students to turn a certain number of projects to find
        employment. This experiment was successful, but I soon released students
        needed something more than just jobChallenge. I started a community to
        guide the students through the projects called teamtanay, through which
        neoG Camp was found and jobChallenge got converted into roc8.careers.
        With neoG Camp, I solved the skill gap for engineering roles and
        programming roles. We solved it for tech roles, but what about everyone
        else? With Invact, I aim to solve the skill gap for business and
        non-tech roles like marketing, product, business analytics, and many
        more.
      </>
    ),
  },
  {
    title: "Mentorship",
    content: (
      <>
        When I was in college, I had no one to guide me on what to do. I did not
        have any mentorship myself. Soon, I released that there is no direction
        and guidance that helps students choose the right career path. There is
        no one to help the students tap into the knowledge of those with more
        experience than themselves. I started teaching and taking workshops as
        an industry professional to college students. While working, I started
        teaching web development to my colleagues and eventually to a lot of
        colleges across South India. Later, to cater to a large number of
        students online, I started with a telegram channel called teamtanay,
        which started growing slowly and now has become a community of more than
        35K students. I have mentored over 1000+ students to get to land a tech
        career even during the period of the pandemic. Now, providing guidance
        for students from non-tech and business roles to land their first jobs.
      </>
    ),
  },
  {
    title: "Author",
    content: (
      <>
        In 2013, I began my writing career on Quora by answering and resolving
        questions based on my coding expertise. From there, I rose to the
        position of top writer. At the same time, I launched a newsletter in
        which I documented the lessons I had learned in both my personal and
        professional lives. This newsletter assisted thousands of students and
        developers in developing both personally and professionally. In 2021, my
        newsletter won the prize for best newsletter. The Productive
        Professional is a book I wrote that contains all of my productivity
        advice. However, I wanted to write about something major, so I did some
        study on education and came up with a paper titled `Creating MOOCs for
        Effective Online Learning Experience` which won the prize for best
        paper. This is all about mass writing; I also write on LinkedIn on a
        regular basis and am one of the 15 top voices on LinkedIn for 2022.
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
