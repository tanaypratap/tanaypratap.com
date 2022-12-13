import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode } from "react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"md"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"}>{title}</StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function SocialMedia() {
  return (
    <Box maxW='6xl' mx={"auto"} pb={20} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        Join Tanay’s extended family
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"Followers "}
          stat={"103,956+"}
          icon={
            <Image src='/images/instagram.png' width='70' height='70' alt='' />
          }
        />
        <StatsCard
          title={"Followers "}
          stat={"158,861+"}
          icon={
            <Image src='/images/linkedin.png' width='70' height='70' alt='' />
          }
        />
        <StatsCard
          title={"Followers"}
          stat={"117,024+"}
          icon={
            <Image width='70' height='70' alt='' src='/images/twitter.png' />
          }
        />
        <StatsCard
          title={"Followers"}
          stat={"64,400+"}
          icon={
            <Image width='70' height='70' alt='' src='/images/youtube.png' />
          }
        />
      </SimpleGrid>
    </Box>
  );
}
