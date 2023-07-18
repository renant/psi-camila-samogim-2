import Link from "next/link";

import Image from 'next/image';
import logo from '../../../public/logo-cortado.png';

export default function Header() {
  return (
    <header>
      <nav className="bg-red-100 prose prose-sm md:prose-xl max-w-6xl mx-auto flex justify-between sm:items-start sm:flex-row relative items-center">
        <div className='w-0 md:w-36 pt-2 md:absolute md:left-6 md:-top-6 md:visible invisible '>
          <Image src={logo} alt="Logo da Psicologa Camila Samogim" />
        </div>
        <div className="md:w-0 md:h-0 md:invisible visible">
          <Image width={100} src={logo} alt="Logo da Psicologa Camila Samogim" />
        </div>
        <div>
          <ul className="space-x-4 mr-2">
            <Link href="/" className="text-pink-500 hover:text-pink-600 no-underline">
              Home
            </Link>
            <Link href="/posts" className="text-pink-500 hover:text-pink-600 no-underline">
              Posts
            </Link>
            <Link href="/lojinha" className="text-pink-500 hover:text-pink-600 no-underline">
              Lojinha
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  )
}