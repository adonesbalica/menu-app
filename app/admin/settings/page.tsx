import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingsRoute() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold">Configurações</h1>
        <p>Informações públicas do restaurante.</p>
      </div>
      <Card className="max-w-2xl">
        <CardContent>
          <form className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-3">
              <Label htmlFor="name">Nome do estabelecimento</Label>
              <Input
                type="text"
                id="name"
                placeholder="Nome"
                className="rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-y-3">
              <Label htmlFor="slogan">Slogan / tagline</Label>
              <Input
                type="text"
                id="slogan"
                placeholder="Slogan"
                className="rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-y-3">
              <Label htmlFor="contact">
                Número do WhatsApp (DDI+DDD+número, ex: 5511988887777){" "}
              </Label>
              <Input
                type="phone"
                id="contact"
                placeholder="5511999999999"
                className="rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-y-3">
              <Label htmlFor="bannerUrl">URL do banner (hero)</Label>
              <Input type="url" id="bannerUrl" className="rounded-xl" />
            </div>
            <div className="flex flex-col gap-y-3">
              <Label htmlFor="logoUrl">URL do logo (opcional)</Label>
              <Input type="url" id="logoUrl" className="rounded-xl" />
            </div>

            <Button className="max-w-50 rounded-xl">Salvar alterações</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
