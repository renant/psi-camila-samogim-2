
import Image from 'next/image';
import Galery from './image-galery';


export default function Espaco() {


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
        <Galery />
      </div>
    </>

  );
}