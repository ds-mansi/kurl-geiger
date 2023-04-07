import * as React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const PhotoSlider = (props: any) => {
  const { c_shoeSlider } = props;

  const photos = props?.props?.map((element: any) => (
    <SplideSlide>
      <div style={{ position: "relative" }}>
        <img
          src={element?.sliderImgs?.url}
          style={{
            height: "67%",
            width: "30%",
            display: "block",
            margin: "auto",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            textAlign: "center",
          }}
        >
          <p style={{ textTransform: "uppercase" }}>{element?.imgText}</p>
        </div>
      </div>
    </SplideSlide>
  ));
  return (
    <>
      <Splide aria-label="Photo Slider">{photos}</Splide>
    </>
  );
};

export default PhotoSlider;
