import { Tag } from "@chakra-ui/react";

const TagComponent = ({ children, ...props }) => {
  return (
    <Tag
      fontSize='larger'
      fontWeight='600'
      color='black'
      minHeight='2rem'
      m='0 .5rem 7px 0'
      p='1rem 2rem'
      cursor='pointer'
      transitionDuration='250ms'
      userSelect='none'
      textTransform='capitalize'
      boxShadow={"base"}
      bg='blue.50'
      {...props}
    >
      {children}
    </Tag>
  );
};

export default TagComponent;
