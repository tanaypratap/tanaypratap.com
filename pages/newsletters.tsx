import { useState, useEffect, useCallback, Key } from "react";
import {
  Alert,
  AlertIcon,
  Box,
  Flex,
  Heading,
  Input,
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

const options = {
  includeScore: true,
  threshold: 0.3,
  ignoreLocation: true,
  keys: ["title"],
};

const Newsletters = ({ posts }: any) => {
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
        <title>newsletters | tanaypratap</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero title='Tanay’s Newsletters' image />
      <Hero title='Why you should read Tanay’s newsletter?' />
      <SuccessStories />
      {/* <SignatureContentNewsletters /> */}
      <Newsletter />
      <Heading
        as='h2'
        fontWeight={700}
        textTransform='uppercase'
        lineHeight={1.2}
        textAlign='center'
        fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
      >
        Browse by Categories
      </Heading>
      <Box
        as='section'
        fontSize='16px'
        m='0 13%'
        px={{ md: "10", lg: "20", xl: "30" }}
        py='4'
      >
        <Flex justify='center'>
          <Input
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            value={searchValue}
            variant='outline'
            placeholder='Search...'
            maxWidth='400px'
          />
        </Flex>

        <Flex
          justify='center'
          align='center'
          direction='row'
          wrap='wrap'
          m='1.5rem 0'
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

        <Flex
          justify='center'
          align='center'
          direction='row'
          wrap='wrap'
          m='1.5rem 0'
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

export default Newsletters;
