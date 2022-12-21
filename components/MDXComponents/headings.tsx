import {
  Box,
  chakra,
  Heading,
  HeadingProps,
  OmitCommonProps,
  VisuallyHidden,
} from "@chakra-ui/react";
import { DetailedHTMLProps, HTMLAttributes } from "react";

const Headings = (
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
      keyof HeadingProps
    > &
    HeadingProps & { as?: "h2" | undefined }
) => {
  const { children, id } = props;

  return (
    <Heading my='0.75em' {...props}>
      <Box pointerEvents='auto'>
        <VisuallyHidden>Read the {children} section.</VisuallyHidden>
        {children}
        {id && (
          <chakra.a
            href={`#${id}`}
            pl='2px'
            color='#3182ce'
            fontWeight='500'
            outline='none'
            opacity='0'
            _hover={{ opacity: 0.75 }}
            aria-label='anchor'
          >
            #
          </chakra.a>
        )}
      </Box>
    </Heading>
  );
};

export default Headings;
