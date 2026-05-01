import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductCard() {
  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-4 flex gap-3 items-center">
      {/* Image */}
      <img
        src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Produto"
        className="w-16 h-16 object-cover rounded-xl"
      />

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold truncate">Nome do Produto</h3>

          <span className="text-[10px] bg-stone-200 text-stone-600 px-2 py-0.5 rounded-full">
            inativo
          </span>
        </div>

        <p className="text-xs text-stone-500">Categoria Exemplo</p>

        <p className="text-sm font-bold text-rose-600 mt-0.5">R$ 29,90</p>
      </div>

      <Button className="p-2 bg-transparent hover:bg-transparent">
        <Pencil className="w-4 h-4 text-stone-500" />
      </Button>

      <Button className="p-2 bg-transparent hover:bg-transparent">
        <Trash2 className="w-4 h-4 text-stone-500" />
      </Button>
    </div>
  );
}
