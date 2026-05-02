"use client";

import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

/* ================= TYPES ================= */

export type AddonOption = {
  name: string;
  price: number;
};

export type AddonGroup = {
  id: string;
  name: string;
  required: boolean;
  multiSelect: boolean;
  maxSelect?: number;
  options: AddonOption[];
};

type AddonManagerProps = {
  group: AddonGroup;
  onChange: (group: AddonGroup) => void;
  onRemove: () => void;
};

/* ================= COMPONENT ================= */

export function AddonManager({ group, onChange, onRemove }: AddonManagerProps) {
  function updateField<K extends keyof AddonGroup>(
    field: K,
    value: AddonGroup[K],
  ) {
    onChange({ ...group, [field]: value });
  }

  function addOption() {
    updateField("options", [...group.options, { name: "", price: 0 }]);
  }

  function updateOption<K extends keyof AddonOption>(
    index: number,
    field: K,
    value: AddonOption[K],
  ) {
    const updated = [...group.options];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };
    updateField("options", updated);
  }

  function removeOption(index: number) {
    const updated = group.options.filter((_, i) => i !== index);
    updateField("options", updated);
  }

  return (
    <Card>
      <CardContent className="flex flex-col gap-3">
        {/* Nome + remover grupo */}
        <div className="flex items-center gap-2">
          <Input
            placeholder="Nome do grupo (ex: Tamanho)"
            value={group.name}
            onChange={(e) => updateField("name", e.target.value)}
          />
          <X onClick={onRemove} className="cursor-pointer hover:text-red-500" />
        </div>

        {/* Configurações */}
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex items-center space-x-2">
            <Switch
              checked={group.required}
              onCheckedChange={(v) => updateField("required", v)}
            />
            <Label className="text-xs">Obrigatório</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              checked={group.multiSelect}
              onCheckedChange={(v) => updateField("multiSelect", v)}
            />
            <Label className="text-xs">Múltipla escolha</Label>
          </div>

          {group.multiSelect && (
            <div className="flex items-center gap-2">
              <Label className="text-xs">Máx:</Label>

              <Input
                type="number"
                value={group.maxSelect ?? ""}
                onChange={(e) =>
                  updateField(
                    "maxSelect",
                    e.target.value ? Number(e.target.value) : undefined,
                  )
                }
                className="w-16 h-7 rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Opções */}
        <div className="flex flex-col gap-2">
          {group.options.map((opt, index) => (
            <div key={opt.name} className="flex gap-2 items-center">
              <Input
                placeholder="Opção"
                value={opt.name}
                onChange={(e) => updateOption(index, "name", e.target.value)}
              />
              <Input
                type="number"
                placeholder="0"
                value={opt.price}
                onChange={(e) =>
                  updateOption(index, "price", Number(e.target.value))
                }
                className="max-w-24"
              />
              <X
                onClick={() => removeOption(index)}
                className="cursor-pointer hover:text-red-500"
              />
            </div>
          ))}
        </div>

        {/* Adicionar opção */}
        <Button
          type="button"
          variant="ghost"
          onClick={addOption}
          className="max-w-28 text-sm font-normal rounded-xl"
        >
          <Plus className="size-4" />
          Opção
        </Button>
      </CardContent>
    </Card>
  );
}
