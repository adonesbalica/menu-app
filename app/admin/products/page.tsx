import { CreateProduct } from "@/app/components/CreateProduct";
import ProductCard from "@/app/components/ProductCard";

export default function ProductsRoute() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Produtos</h1>
          <p>Cadastre itens com adicionais e fotos.</p>
        </div>

        <div>
          <CreateProduct />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
