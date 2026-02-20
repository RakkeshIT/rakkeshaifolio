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
import axios from "axios";
interface props {
  folder: string;
}
const ProjectCarousel = ({ folder }: props) => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  console.log("folder: ", folder);
  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      try {
        const res = await axios.get<string[]>(`/api/project-images?folder=${folder}`);
        const data = res.data;
        setImages(data);
      } catch (error) {
        console.log("Errom form fethc images", error);
      } finally {
        setLoading(false);
      }
    };
    fetchImage();
  }, [folder]);
  return (
    <Carousel className="h-full w-full">
      {/* <CarouselPrevious />
      <CarouselNext /> */}
      <CarouselContent>
        {images.map((image, i) => (
          <CarouselItem key={i} className="h-full w-full">
            <img src={image} alt="" />
          </CarouselItem>
        ))}

        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm z-50">
            <div className="w-10 h-10 border-4 border-indigo-300 border-t-indigo-600 rounded-full animate-spin mb-4" />
            <span className="text-sm text-white animate-pulse">
              Loading Images...
            </span>
          </div>
        )}

      </CarouselContent>
    </Carousel>
  );
};

export default ProjectCarousel;
