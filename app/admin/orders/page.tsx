import OrderCard from "@/app/components/OrderCard";
import { SelectOrders } from "@/app/components/SelectOrders";

export default async function OrdersRoute() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Pedidos</h1>
          <p>Atualize o status de cada pedido em tempo real.</p>
        </div>
        <SelectOrders />
      </div>
      <OrderCard />
    </div>
  );
}
