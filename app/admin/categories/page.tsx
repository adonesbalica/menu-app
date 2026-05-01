import { Plus } from "lucide-react";
import CategoryRow from "@/app/components/CategoryRow";
import { Button } from "@/components/ui/button";

export default function CategoriesRoute() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Categorias</h1>
          <p>Organize os produtos do cardápio.</p>
        </div>

        <Button className="p-4 rounded-3xl">
          <Plus />
          Nova
        </Button>
      </div>
      <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
        <div className="divide-y divide-stone-100">
          <CategoryRow />
        </div>
      </div>
    </div>
  );
}
