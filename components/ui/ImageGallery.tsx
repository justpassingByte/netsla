"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const showNextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => openModal(index)}
          >
            <Image
              src={src}
              alt={`Demo image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-lg font-semibold">Xem</span>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          <DialogHeader>
            <DialogTitle className="sr-only">Demo Image Viewer</DialogTitle>
          </DialogHeader>
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
            </Button>
            <Image
              src={images[selectedIndex]}
              alt={`Full demo image ${selectedIndex + 1}`}
              width={1200}
              height={800}
              objectFit="contain"
              className="w-full h-auto max-h-[80vh]"
            />
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
                  onClick={showPrevImage}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
                  onClick={showNextImage}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImageGallery; 