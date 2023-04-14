import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="bg-red-100 prose prose-xl max-w-4xl mx-auto flex justify-between flex-col sm:flex-row">
        <div>
          {/* <Link href="/">teste</Link> */}
        </div>
        <div>
          <ul className="space-x-4 mr-2">
            <Link href="/" className="text-pink-500 hover:text-pink-600 no-underline">
              Home
            </Link>
            <Link href="/posts" className="text-pink-500 hover:text-pink-600 no-underline">
              Posts
            </Link>
            <Link href="/sobre" className="text-pink-500 hover:text-pink-600 no-underline">
              Sobre
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