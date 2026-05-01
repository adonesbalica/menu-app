import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function OrderCard() {
  return (
    <div className="space-y-3">
      <div className="bg-white border border-stone-200 rounded-2xl p-5">
        <div className="flex items-start justify-between flex-wrap gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-lg">#A1B2C3D4</span>

              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                Entregue
              </Badge>
            </div>

            <p className="text-sm text-stone-500 mt-0.5">
              30/04/2026 14:30 · João Silva · (85) 99999-9999
            </p>

            <p className="text-xs text-stone-500 mt-1">
              Entrega: Rua Exemplo, 123 · Pagamento: Cartão
            </p>

            <p className="text-xs text-stone-500 mt-1 italic">
              “Sem cebola, por favor”
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-display text-xl font-bold text-rose-600">
              R$ 59,90
            </span>

            <Select defaultValue="entregue">
              <SelectTrigger className="w-44 rounded-full">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="todos">Todos</SelectItem>
                <SelectItem value="pendente">Pendente</SelectItem>
                <SelectItem value="preparando">Preparando</SelectItem>
                <SelectItem value="saiu_para_entrega">
                  Saiu p/ entrega
                </SelectItem>
                <SelectItem value="entregue">Entregue</SelectItem>
                <SelectItem value="cancelado">Cancelado</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-stone-100">
          <ul className="text-sm space-y-1">
            <li className="flex justify-between gap-2">
              <span>
                <span className="font-semibold">2x</span> Pizza Calabresa
                <span className="text-xs text-stone-500">
                  {" — "}
                  Extra queijo, borda recheada
                </span>
              </span>

              <span className="text-stone-600">R$ 39,90</span>
            </li>

            <li className="flex justify-between gap-2">
              <span>
                <span className="font-semibold">1x</span> Refrigerante
              </span>

              <span className="text-stone-600">R$ 8,00</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
