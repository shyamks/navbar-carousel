import React from "react";
import { Flex, theme } from "@react-yuki/ui";
import styles from '../app/page.module.css';

const Slide = ({
  imageUrl,
  fill,
  content,
  customContent,
  useImageAsTag,
  ...styles
}) => {

  const renderedContent = (
    <div 
      style={{
        backgroundImage: 'url(/rectangle-1@2x.png)',
        backgroundRepeat: "no-repeat"
      }}
    className={'swiper-slide'}/>
  )

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="20rem"
      width="1"
      className="swiper-slide"
    >
      {renderedContent}
    </Flex>
  );
};

Slide.defaultProps = {
  fill: theme.colors.gray[2]
};

Slide.displayName = "Slide";

export default Slide;
