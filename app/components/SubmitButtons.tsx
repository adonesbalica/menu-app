"use client";

import { Loader2, LogOut } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

export function SubmitLoginButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button className="w-full" disabled>
          <Loader2 className="size-4 mr-2 animate-spin" />
          Aguarde..
        </Button>
      ) : (
        <Button
          type="submit"
          className="w-full p-5 bg-primary text-primary-foreground rounded-full"
        >
          Entrar
        </Button>
      )}
    </>
  );
}

export function SubmitRegisterButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button className="w-full" disabled>
          <Loader2 className="size-4 mr-2 animate-spin" />
          Aguarde...
        </Button>
      ) : (
        <Button
          type="submit"
          className="w-full p-5 bg-primary text-primary-foreground rounded-full"
        >
          Registrar
        </Button>
      )}
    </>
  );
}

export function LogoutSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button className="w-full" disabled variant="outline">
          <Loader2 className="size-4 mr-2 animate-spin" />
          Aguarde...
        </Button>
      ) : (
        <Button
          type="submit"
          className="flex p-4 justify-start bg-transparent text-stone-800 hover:bg-stone-200"
        >
          <LogOut />
          Sair
        </Button>
      )}
    </>
  );
}
