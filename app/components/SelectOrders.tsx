import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectOrders() {
  return (
    <Select defaultValue="todos">
      <SelectTrigger className="w-full max-w-48 rounded-full">
        <SelectValue />
      </SelectTrigger>

      <SelectContent position="popper">
        <SelectGroup>
          <SelectItem value="todos">Todos</SelectItem>
          <SelectItem value="pendente">Pendente</SelectItem>
          <SelectItem value="preparando">Preparando</SelectItem>
          <SelectItem value="saiu_para_entrega">Saiu p/ entrega</SelectItem>
          <SelectItem value="entregue">Entregue</SelectItem>
          <SelectItem value="cancelado">Cancelado</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
