import {
  Link as ChakraLink,
  chakra,
  Code,
  LinkProps,
  OmitCommonProps,
  ChakraProps,
  CodeProps,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { DetailedHTMLProps, AnchorHTMLAttributes, ReactNode } from "react";
import { HTMLAttributes } from "react";
import { OlHTMLAttributes } from "react";
import { LiHTMLAttributes } from "react";

export const CustomLink = (
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      DetailedHTMLProps<
        AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
      >,
      keyof LinkProps
    > &
    LinkProps & { as?: "a" | undefined }
) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <ChakraLink {...props} />
      </NextLink>
    );
  }

  return <ChakraLink isExternal {...props} />;
};

export const UnorderedList = (props: any) => (
  <chakra.ul style={{ paddingLeft: "1rem", paddingTop: "0.5rem" }} {...props} />
);

export const OrderedList = (
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      DetailedHTMLProps<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>,
      keyof ChakraProps
    > &
    ChakraProps & { as?: "ol" | undefined }
) => (
  <chakra.ol style={{ paddingLeft: "1rem", paddingTop: "0.5rem" }} {...props} />
);

export const ListItem = (
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>,
      keyof ChakraProps
    > &
    ChakraProps & { as?: "li" | undefined }
) => <chakra.li style={{ paddingBottom: "0.25rem" }} {...props} />;

export const InlineCode = (
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
      keyof CodeProps
    > &
    CodeProps & { as?: "code" | undefined }
) => <Code {...props} />;
