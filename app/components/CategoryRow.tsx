import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CategoryRow() {
  return (
    <li className="flex items-center gap-3 p-4">
      {/* Order badge */}
      <span className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-xs font-bold text-stone-600">
        1
      </span>

      {/* Name */}
      <span className="flex-1 font-semibold">Categoria Exemplo</span>

      {/* Edit */}
      <Button className="p-2 text-stone-500 hover:text-stone-900 bg-transparent hover:bg-transparent">
        <Pencil className="w-4 h-4" />
      </Button>

      {/* Delete */}
      <Button className="p-2 text-stone-500 hover:text-rose-600 bg-transparent hover:bg-transparent">
        <Trash2 className="w-4 h-4" />
      </Button>
    </li>
  );
}
