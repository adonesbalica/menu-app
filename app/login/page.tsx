import { redirect } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitLoginButton } from "../components/SubmitButtons";
import { auth, signIn } from "../utils/auth";

export default async function LoginRoute() {
  const session = await auth();

  if (session?.user) {
    redirect("/");
  }

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Acesse o painel administrativo</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              action={async (formData) => {
                "use server";
                await signIn("credentials", formData);
              }}
              className="flex flex-col gap-y-4"
            >
              <div className="flex flex-col gap-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="hello@hello.com"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  required
                  placeholder="••••••••"
                  type="password"
                />
              </div>
              <SubmitLoginButton />
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
