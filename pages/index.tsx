import { Box } from "@chakra-ui/react";
import Head from "next/head";
import AreasOfInterest from "../components/AreasOfInterest";
import Banner from "../components/Banner";
import FeaturedOn from "../components/FeaturedOn";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import Quote from "../components/Quote";
import SignatureContent from "../components/SignatureContent";
import SocialMedia from "../components/SocialMedia";
import SuccessStories from "../components/SuccessStories";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>home | tanaypratap</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Banner />
      <FeaturedOn />
      <Hero title="I'm Tanay Pratap" image />
      <Quote />
      <AreasOfInterest />
      <SuccessStories />
      {/* <SignatureContent /> */}
      <Newsletter />
      <SocialMedia />
    </Box>
  );
}
