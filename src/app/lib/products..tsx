import fs from 'fs';
import path from 'path';

const jsonProdutosDirectory = path.join(process.cwd(), 'json/produtos.json');

export function getProducts(): Product[] {
  const data = fs.readFileSync(jsonProdutosDirectory, 'utf8');

  const products = JSON.parse(data);

  return products.map((product: Product) => product);
}