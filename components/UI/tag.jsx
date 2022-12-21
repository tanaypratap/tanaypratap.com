import { Tag } from "@chakra-ui/react";

const TagComponent = ({ children, ...props }) => {
  return (
    <Tag
      fontSize='large'
      fontWeight='500'
      // color='black'
      minHeight='2rem'
      m='0 .5rem 7px 0'
      // p='1rem 2rem'
      cursor='pointer'
      // transitionDuration='250ms'
      userSelect='none'
      textTransform='capitalize'
      // boxShadow={"base"}
      bg='#fff'
      {...props}
    >
      {children}
    </Tag>
  );
};

export default TagComponent;
