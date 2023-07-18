"use client"
import { useCallback, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

import Image from 'next/image';

export default function Galery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    '/espaco/1.jpeg',
    '/espaco/2.jpeg',
    '/espaco/3.jpeg',
    '/espaco/4.jpeg',
    '/espaco/5.jpeg',
    '/espaco/6.jpeg',
    '/espaco/7.jpeg',
    '/espaco/8.jpeg',
    '/espaco/9.jpg',
    '/espaco/10.jpeg',
    '/espaco/11.jpeg',
    '/espaco/12.jpeg',
  ];

  const openImageViewer = useCallback((index: any) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (

    <div className='mt-2 flex flex-wrap m-auto justify-center md:gap-4 gap-2'>
      {images.map((src, index) => (
        <Image
          className='hover:opacity-30 cursor-pointer spect-square  rounded-2xl'
          src={src}
          onClick={() => openImageViewer(index)}
          width={100}
          height={100}
          key={index}
          style={{ margin: "2px" }}
          alt=""
        />
      ))}


      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)"
          }}
          closeOnClickOutside={true}
        />
      )}
    </div>
  )
}