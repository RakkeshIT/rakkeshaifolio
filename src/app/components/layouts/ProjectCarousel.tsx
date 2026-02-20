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
import { span } from "framer-motion/client";
interface props {
  folder: string;
}
const ProjectCarousel = ({ folder }: props) => {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false)
  console.log("folder: ", folder)
  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true)
      try {
        const res = await axios.get(`/api/project-images?folder=${folder}`)
      const data: any = res.data;
      setImages(data)
      } catch (error) {
        console.log("Errom form fethc images", error);
      }finally{
        setLoading(false)
      }
    }
    fetchImage()
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

      {loading && (
  <div className="flex flex-col items-center justify-center py-20">
    <div className="w-10 h-10 border-4 border-indigo-300 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
    <span className="text-sm text-gray-600 dark:text-gray-300 animate-pulse">
      Loading Skills...
    </span>
  </div>
)}

      </CarouselContent>
    </Carousel>
  );
};

export default ProjectCarousel;
