import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type Category = {
  id: string;
  order: number;
  name: string;
};

export default function CategoryRow({ id, name, order }: Category) {
  return (
    <li className="flex items-center gap-3 p-4">
      {/* Order badge */}
      <span className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-xs font-bold text-stone-600">
        {order}
      </span>

      {/* Name */}
      <span className="flex-1 font-semibold">{name}</span>

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
