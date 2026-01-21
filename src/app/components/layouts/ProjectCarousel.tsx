"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface props {
  folder: string;
}
const ProjectCarousel = ({ folder }: props) => {
  const [images, setImages] = useState<any[]>([]);
  console.log("folder: ", folder)
  useEffect(() => {
    fetch(`/api/project-images?folder=${folder}`)
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);
  return (
    <Carousel className="h-full w-full">
      <CarouselPrevious />
      <CarouselNext />
      <CarouselContent>
        {images.map((image, i) => (
          <CarouselItem key={i} className="h-full w-full">
            <img src={image} alt=""/>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ProjectCarousel;
