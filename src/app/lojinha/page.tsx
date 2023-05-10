import { getProducts } from "../lib/products.";

export function generateMetadata() {
  return {
    title: 'Lojinha',
    description: 'Lojinha da Psi Camila Samogim',
  };
}

export default async function Page() {
  const products = getProducts();

  return (
    <main >
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
                <h3 className="text-md md:text-xl font-semibold ">
                  {produto.nome}
                </h3>
                <h4 className="md:text-sm text-xs font-extralight opacity-60 mb-2">
                  {produto.nomeLoja}
                </h4>
                <p className="md:text-base text-sm loja-text-max">{produto.descricao}</p>
              </a>
            ))}
        </div>
      </section>
    </main>
  );
}