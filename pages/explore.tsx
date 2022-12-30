/* eslint-disable react/no-children-prop */
import { useState, useEffect, useCallback, Key } from "react";
import {
  Alert,
  AlertIcon,
  Box,
  Center,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Fuse from "fuse.js";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import SignatureContentNewsletters from "../components/SignatureContentNewsletters";
import SuccessStories from "../components/SuccessStories";
import { getAllFilesFrontMatter } from "../lib/posts";
import { tagColor, types } from "../components/UI/tagColor";
// import { seo } from "config";
import TagComponent from "../components/UI/tag";
import BlogPost from "../components/blogPost";
import Head from "next/head";
import { SearchIcon } from "@chakra-ui/icons";

const options = {
  includeScore: true,
  threshold: 0.3,
  ignoreLocation: true,
  keys: ["title"],
};

const Explore = ({ posts }: any) => {
  const router = useRouter();

  const fuse = new Fuse(posts, options);

  const [blogPost, setBlogPost] = useState(posts);
  const [searchValue, setSearchValue] = useState("");

  const filteredPosts = (tag: any) => {
    const blogResults = posts.filter((post: any) => post.tags.includes(tag));
    setBlogPost(blogResults);
  };
  const filteredPostsByType = (type: any) => {
    const blogResults = posts.filter((post: any) => post.types.includes(type));
    setBlogPost(blogResults);
  };

  const updateSearch = () => {
    const results = fuse.search(searchValue);
    const blogResults = results.map((res) => res.item);
    setBlogPost(blogResults);
  };

  const delayedSearch = useCallback(updateSearch, [searchValue]);

  useEffect(() => {
    if (searchValue.length === 0) {
      return setBlogPost(posts);
    }
    delayedSearch();
  }, [delayedSearch]);

  useEffect(() => {
    if (router.query?.tag !== undefined) {
      filteredPosts(router.query?.tag);
    }
  }, [router]);

  const title = "Blog";
  // const description = seo.description;
  // const url = `${seo.canonical}blog`;

  return (
    <>
      {/* <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title,
          description,
          url,
        }}
      /> */}
      <Head>
        <title>explore | tanaypratap</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Center>
        <Flex
          justify='center'
          my={16}
          direction={"column"}
          gap={8}
          alignItems='center'
        >
          <Heading
            as='h2'
            fontWeight={700}
            textTransform='uppercase'
            lineHeight={1.2}
            textAlign='center'
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Browse by Categories and Topics
          </Heading>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<SearchIcon color='gray.300' />}
            />
            <Input
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              value={searchValue}
              variant='flushed'
              placeholder='What are you looking for?'
              maxWidth='100%'
            />
          </InputGroup>
        </Flex>
      </Center>
      <Box
        display='flex'
        margin={"1rem auto"}
        maxWidth={"6xl"}
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Box
          display='flex'
          flex='0.5'
          marginRight='3'
          alignItems='initial'
          flexDirection='column'
          paddingLeft='2rem'
          flexDir='column'
        >
          <Heading as='h2' size='lg' mb={4}>
            Filter
          </Heading>
          <Heading as='h3' size='md'>
            By Categories
          </Heading>
          <Flex
            direction='column'
            justify='center'
            align='initial'
            wrap='wrap'
            m='1rem 0'
          >
            {Object.keys(tagColor).map((tag, index) => {
              const color = tagColor[tag];

              return (
                <Box key={index}>
                  <TagComponent onClick={() => filteredPosts(tag)}>
                    {tag}
                  </TagComponent>
                </Box>
              );
            })}
          </Flex>

          <Heading as='h3' size='md'>
            By Topics
          </Heading>
          <Flex
            justify='center'
            align='initial'
            direction='column'
            wrap='wrap'
            m='1rem 0'
          >
            {types.map((type: any, index: Key | null | undefined) => {
              return (
                <Box key={index}>
                  <TagComponent onClick={() => filteredPostsByType(type)}>
                    {type}
                  </TagComponent>
                </Box>
              );
            })}
          </Flex>
        </Box>

        <Box
          display='flex'
          flex='2'
          flexDirection='column'
          justifyContent='initial'
          marginTop={{ base: "3", sm: "0" }}
        >
          <Heading as='h2' size='lg' mb={4}>
            Posts - {blogPost.length} results
          </Heading>
          {blogPost.length > 0 ? (
            <BlogPost posts={blogPost} />
          ) : (
            <Alert
              status='info'
              borderRadius='md'
              // d='flex'
              justifyContent='center'
              mx='auto'
              maxWidth='500px'
              fontWeight='500'
            >
              <AlertIcon />
              No blog post has been found!
            </Alert>
          )}
        </Box>
      </Box>
    </>
  );
};

export async function getStaticProps() {
  const data: any = await getAllFilesFrontMatter("blog");
  const posts = data.sort(
    (a: any, b: any) =>
      Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  // console.log({ posts });

  return { props: { posts } };
}

export default Explore;
