import React, { FC } from "react";
import Swiper from "react-id-swiper";
import { SlideContainer } from "./styledComponents";
import SlideItem from "./SlideItem";
import { generateSlides } from "./utils";

export const renderSlide = ({ id, ...rest }) => {
  return (
    <SlideItem key={`${id}-slideContent`} />
  )
};

const Slider= ({
  hasImage,
  useImageAsTag,
  params,
  id,
  ...styles
}) => {
  const data = generateSlides({ id, hasImage, useImageAsTag });

  console.log(data, 'data');
  return (
      <Swiper {...params}>{data.map(renderSlide)}</Swiper>
  );
};

export default Slider;
