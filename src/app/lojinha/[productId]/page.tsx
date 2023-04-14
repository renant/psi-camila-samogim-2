import { getProducts } from "../../lib/products.";

export function generateStaticParams() {
  const products = getProducts();

  return products.map((product) => ({
    productId: product.id
  }))
}

export const revalidate = 3600;

export default async function Page({ params }: { params: { productId: string } }) {
  var products = getProducts();
  const { productId } = params;
  const product = products.find((product) => product.id === productId);

  products.filter(e => e.id !== productId);
  products = products.sort((_a, _b) => 0.5 - Math.random()).slice(0, 6);


  return (
    <>
      <div className="px-6 prose md:prose-xl prose-pink prose-sm mt-2">
        <h1>{product?.nome}</h1>
        <p>{product?.descricao}</p>
        <a href={product?.url}>Link para comprar</a>

      </div>
      <div className="border-b-2 border-pink-400 mt-6">

      </div>
      <h4 className="text-center text-gray-600 pt-1 pb-2 md:pt-6 text-base md:text-2xl md:mx-2">
        Outros produtos que recomendo
      </h4>
      <section>
        <div className="flex flex-wrap px-2 md:px-4 justify-center ">
          {products &&
            products.map(produto => (
              <a
                key={produto.id}
                className="flex w-full md:w-5/12 flex-col rounded-xl border-red-300 border pl-4 p-2 md:p-4 m-2 md:m-4 text-left hover:text-red-400  transition-all bg-slate-50"
                href={produto.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-lg md:text-xl font-semibold ">
                  {produto.nome}
                </h3>
                <h4 className="text-sm font-extralight opacity-60 mb-2">
                  {produto.nomeLoja}
                </h4>
                <p className="text-base loja-text-max">{produto.descricao}</p>
              </a>
            ))}
        </div>
      </section>
    </>
  )
}
