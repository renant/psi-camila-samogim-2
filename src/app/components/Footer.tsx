import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-pink-950 max-w-6xl mx-auto">
      <div className=" m-auto text-gray-800 flex flex-wrap justify-left">

        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">

          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Links
          </div>

          <Link href="/" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Home
          </Link>
          <Link href="/posts" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Posts
          </Link>
          <Link href="/lojinha" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Lojinha
          </Link>

        </div>


        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Social Links
          </div>
          <a href="https://api.whatsapp.com/send?phone=5511914175676" className="block text-gray-300 hover:text-gray-100 duration-700">
            Whatsapp
          </a>
          <a href="https://www.instagram.com/psicamilasamogim/" className="block text-gray-300 hover:text-gray-100 duration-700">
            Instagram
          </a>
          <a href="https://www.linkedin.com/in/camila-samogim-740928163/" className="block text-gray-300 hover:text-gray-100 duration-700">
            Linkedin
          </a>
          <a href="mailto:camila.samogim@hotmail.com?subject=Contato%20pelo%20site&body=Ol%C3%A1%2C%20Camila%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20marcar%20uma%20consulta" className="block text-gray-300 hover:text-gray-100 duration-700">
            Email
          </a>
        </div>
      </div>


      <div className="pt-2">
        <div
          className="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm flex-col
        md:flex-row max-w-6xl"
        >
          <div className="mt-2">
            © 2022 Psicologia Infantil - Camila Samogim - Todos os direitos reservados
          </div>

          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="#" className="w-6 mx-1">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="w-6 mx-1">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="w-6 mx-1">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="w-6 mx-1">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="w-6 mx-1">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}