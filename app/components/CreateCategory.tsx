"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { CreateCategoryAction } from "../admin/categories/actions";

export function CreateCategory() {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [order, setOrder] = useState(1);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await CreateCategoryAction({
        category: name,
        order,
      });

      console.log(res);

      if (res.status === "success") {
        setName("");
        setOrder(1);

        // ✅ FECHA O MODAL AQUI
        setOpen(false);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="p-4 rounded-3xl" onClick={() => setOpen(true)}>
          <Plus />
          Nova
        </Button>
      </DialogTrigger>

      <DialogContent className="min-w-xl">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Nova categoria</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-y-4 mt-4">
            <div className="flex flex-col gap-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome da categoria"
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <Label htmlFor="order">Ordem</Label>
              <Input
                type="number"
                id="order"
                value={order}
                onChange={(e) => setOrder(Number(e.target.value))}
                placeholder="Posição da categoria"
              />
            </div>
          </div>

          <DialogFooter className="mt-4">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Salvando..." : "Salvar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
