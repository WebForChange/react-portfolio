import React, { useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselItem = styled(Card)(({ theme }) => ({
  width: "300px",
}));

const items = [
  {
    title: "Item 1",
    image: "/path-to-image-1.jpg",
  },
  {
    title: "Item 2",
    image: "/path-to-image-2.jpg",
  },
  {
    title: "Item 3",
    image: "/path-to-image-3.jpg",
  },
];

const CarouselExample = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % items.length);
  };

  const handlePrevious = () => {
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  };

  return (
    <div>
      <Button onClick={handlePrevious}>Previous</Button>
      <Button onClick={handleNext}>Next</Button>
      <Carousel
        showStatus={false}
        showThumbs={false}
        selectedItem={activeIndex}
        onClickItem={() => {}}
      >
        {items.map((item, index) => (
          <CarouselItem key={item.title}>
            <CardContent>
              <Typography variant="h5" component="div">
                {item.title}
              </Typography>
            </CardContent>
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselExample;
