import { CreateFood } from "../../components/CreateFood";
import { useRequireUser } from "../../utils/hooks";

export default async function MenuRoute() {
  const session = await useRequireUser();

  return (
    <div className="flex w-full px-4 py-2">
      <div className="flex-1 px-4 py-2">
        <CreateFood />
      </div>
    </div>
  );
}
