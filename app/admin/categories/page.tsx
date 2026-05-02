import CategoryRow from "@/app/components/CategoryRow";
import { CreateCategory } from "@/app/components/CreateCategory";
import { getCategories } from "@/app/data/get-categories";

export default async function CategoriesRoute() {
  const categories = await getCategories();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Categorias</h1>
          <p>Organize os produtos do cardápio.</p>
        </div>

        <CreateCategory />
      </div>
      <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
        <div className="divide-y divide-stone-100">
          {categories.length >= 1 ? (
            categories.map((cat) => (
              <CategoryRow
                id={cat.id}
                name={cat.name}
                order={cat.order}
                key={cat.id}
              />
            ))
          ) : (
            <div className="p-8 text-center text-stone-500 text-sm">
              Nenhuma categoria cadastrada.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
