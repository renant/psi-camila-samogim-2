"use client"
import { useCallback, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

import Image from 'next/image';


export default function Espaco() {
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
    <>

      <div className=" text-base text-black-600 items-center">
        <h1 className="text-4xl font-bold tracking-tight text-pink-400 sm:text-5xl text-center mb-1">
          Meu Consultório
        </h1>
        <div className="flex flex-col md:ml-10 md:px-10 md:py-20">
          <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-1 md:gap-4 md:mb-6">
            <div className="mb-10 md:m-auto mx-auto">
              <Image
                src='/espaco/9.jpg'
                width={250}
                height={250}
                alt=""
                className="aspect-square  rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
            <div className="mb-10 md:m-auto m-auto text-justify px-10">
              <p>Meu espaço foi pensado e planejado com muito carinho para acolher todas as famílias!</p>
              <p>O consultório fica localizado no Edifício Golden Office, na cidade de Jundiaí/SP.</p>
            </div>
          </div>
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:grid-rows-1 md:gap-4 md:mb-6">
            <div className="mb-10 md:m-auto m-auto text-justify px-10">
              <p>A sala é equipada com materiais psicopedagogicos, brinquedos, livros, e diversos outros recursos que são utilizados em nossos atendimentos!</p>
              <p>O espaço possui uma recepção com cantinho do café, para que as famílias possam esperar em um local aconchegante!</p>
            </div>
            <div className="mb-10 md:m-auto mx-auto">
              <Image
                src='/espaco/3.jpeg'
                width={250}
                height={250}
                alt=""
                className="aspect-square  rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-1 md:gap-4 md:mb-6">
            <div className="mb-10 md:m-auto mx-auto">
              <Image
                src='/espaco/6.jpeg'
                width={250}
                height={250}
                alt=""
                className="aspect-square  rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
            <div className="mb-10 md:m-auto m-auto text-justify px-10">
              <p>Também possuímos banheiro e uma pequena copa, utilizada também como recurso de algumas terapias!</p>
              <p>Venha conhecer o espaço e tomar um café comigo!</p>
            </div>
          </div>
        </div>
        <div className='prose prose-sm max-w-none md:px-10'>
          <h2 className='text-center'>Confira de perto meu espaço</h2>
          <h5 className='text-center'>clique para ampliar as fotos</h5>
          <div className='mt-2 flex flex-wrap m-auto justify-center md:gap-4 gap-2'>
            {images.map((src, index) => (
              <Image
                className='hover:opacity-30 cursor-pointer spect-square  rounded-2xl'
                src={src}
                onClick={() => openImageViewer(index)}
                width={130}
                height={130}
                key={index}
                style={{ margin: "2px" }}
                alt=""
              />
            ))}
          </div>

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
      </div>
    </>

  );
}