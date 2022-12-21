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
import Masonry from "react-masonry-css";
import { TwitterTweetEmbed } from "react-twitter-embed";
import wallOfLoveContent from "../content/wall-of-love.content";

export default function SuccessStories() {
  const breakpointColumnsObj = {
    default: 3,
    1000: 2,
    640: 1,
  };

  return (
    <Box>
      <Stack textAlign='center' spacing={6} m='0 13%'>
        <Heading
          as='h1'
          fontWeight={700}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
        >
          Will you be the next success story?
        </Heading>
        <Stack direction={"row"}>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className='tweets-masonry-grid'
            columnClassName='tweets-masonry-grid-column'
          >
            {wallOfLoveContent.tweets.map((tweet) => (
              <Box className='tweet-card' key={tweet.id}>
                <TwitterTweetEmbed tweetId={tweet.id} />
              </Box>
            ))}
          </Masonry>
        </Stack>
      </Stack>
    </Box>
  );
}
