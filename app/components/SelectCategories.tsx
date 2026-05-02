"use client";

import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCategories } from "../data/get-categories";

type Category = {
  id: string;
  name: string;
};

type SelectCategoriesProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SelectCategories({ value, onChange }: SelectCategoriesProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        const data = await getCategories();

        if (isMounted) {
          setCategories(data);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full rounded-xl">
        <SelectValue
          placeholder={loading ? "Carregando..." : "Selecione uma categoria"}
        />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          {categories.map((cat) => (
            <SelectItem key={cat.id} value={cat.name}>
              {cat.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
