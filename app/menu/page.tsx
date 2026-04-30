import { Button } from "@/components/ui/button";
import { signOut } from "../utils/auth";
import { useRequireUser } from "../utils/hooks";

export default async function MenuRoute() {
  const session = await useRequireUser();

  return (
    <div>
      <h1>Dashboard</h1>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">Logout</Button>
      </form>
    </div>
  );
}
