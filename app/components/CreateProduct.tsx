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
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { AddonManager } from "./AddonManager";
import { SelectCategories } from "./SelectCategories";

type AddonOption = {
  name: string;
  price: number;
};

type AddonGroup = {
  id: string;
  name: string;
  required: boolean;
  multiSelect: boolean;
  maxSelect?: number;
  options: AddonOption[];
};

type Product = {
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
  category: string;
  isVisible: boolean;
  addonGroups: AddonGroup[];
};

export function CreateProduct() {
  const [product, setProduct] = useState<Product>({
    name: "",
    price: 0,
    description: "",
    imageUrl: "",
    category: "",
    isVisible: true,
    addonGroups: [],
  });

  function addGroup() {
    setProduct((prev) => ({
      ...prev,
      addonGroups: [
        ...prev.addonGroups,
        {
          id: crypto.randomUUID(),
          name: "",
          required: false,
          multiSelect: false,
          maxSelect: 0,
          options: [],
        },
      ],
    }));
  }

  function updateGroup(id: string, updatedGroup: AddonGroup) {
    setProduct((prev) => ({
      ...prev,
      addonGroups: prev.addonGroups.map((g) =>
        g.id === id ? updatedGroup : g,
      ),
    }));
  }

  function removeGroup(id: string) {
    setProduct((prev) => ({
      ...prev,
      addonGroups: prev.addonGroups.filter((g) => g.id !== id),
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(product);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="p-4 rounded-3xl">
          <Plus />
          Novo
        </Button>
      </DialogTrigger>

      <DialogContent className="min-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl">
        <DialogHeader>
          <DialogTitle>Novo produto</DialogTitle>
        </DialogHeader>

        <FieldGroup>
          <div className="flex gap-4">
            <Field>
              <Label>Nome</Label>
              <Input
                value={product.name}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
              />
            </Field>

            <Field>
              <Label>Preço</Label>
              <Input
                type="number"
                value={product.price}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    price: Number(e.target.value),
                  })
                }
              />
            </Field>
          </div>

          <Field>
            <Label>Descrição</Label>
            <Textarea
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
            />
          </Field>

          <div className="flex gap-4">
            <Field>
              <Label>Imagem</Label>
              <Input
                value={product.imageUrl}
                onChange={(e) =>
                  setProduct({ ...product, imageUrl: e.target.value })
                }
              />
            </Field>

            <Field>
              <Label>Categoria</Label>
              <SelectCategories
                value={product.category}
                onChange={(value) =>
                  setProduct({ ...product, category: value })
                }
              />
            </Field>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              checked={product.isVisible}
              onCheckedChange={(val) =>
                setProduct({ ...product, isVisible: val })
              }
            />
            <Label>Ativo (visível no cardápio)</Label>
          </div>

          <Separator />

          <div className="flex justify-between items-center">
            <p className="font-semibold">Adicionais</p>
            <Button type="button" onClick={addGroup}>
              <Plus className="w-4 h-4 mr-1" /> Grupo
            </Button>
          </div>

          {product.addonGroups.map((group) => (
            <AddonManager
              key={group.id}
              group={group}
              onChange={(updated) => updateGroup(group.id, updated)}
              onRemove={() => removeGroup(group.id)}
            />
          ))}
        </FieldGroup>

        <DialogFooter>
          <Button type="submit" className="w-full">
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
