import {
  Clock,
  MapPin,
  MessageCircle,
  Send,
  ShoppingCart,
  X,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function RestaurantMenu() {
  return (
    <div className="min-h-screen bg-[#F0F0F0] font-sans">
      {/* HERO */}
      <section className="bg-black text-white py-10 flex flex-col items-center text-center px-4">
        <div className="w-44 h-44 bg-zinc-800 border flex items-center justify-center mb-6">
          <span className="text-zinc-400 text-sm">240 x 240</span>
        </div>

        <h1 className="text-5xl font-light mb-4">Goiano Lanches</h1>

        <Badge className="bg-red-600 mb-6 px-6 py-1 font-bold">
          FECHADO AGORA
        </Badge>

        <div className="flex gap-8 text-sm text-zinc-300">
          <Button className="flex items-center gap-2 hover:text-white">
            <Clock className="w-4 h-4" /> Horários
          </Button>
          <Button className="flex items-center gap-2 hover:text-white">
            <MapPin className="w-4 h-4" /> Endereço
          </Button>
        </div>
      </section>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto p-6 grid md:grid-cols-12 gap-6">
        {/* ESQUERDA */}
        <div className="md:col-span-3 space-y-6">
          <Card>
            <CardContent className="p-4 flex justify-between items-center">
              <span>🥤 Refrigerantes</span>
              <span>›</span>
            </CardContent>
          </Card>

          <Card className="p-6 text-center">
            <h3 className="text-green-600 font-bold mb-4">
              Compartilhe com amigos
            </h3>

            <div className="flex justify-center gap-2">
              <Button size="icon" className="bg-blue-600">
                {/* <Facebook /> */}
                Facesbusque
              </Button>
              <Button size="icon" className="bg-sky-400">
                {/* <Twitter /> */}X
              </Button>
              <Button size="icon" className="bg-green-600">
                <MessageCircle />
              </Button>
              <Button size="icon" className="bg-blue-500">
                <Send />
              </Button>
            </div>
          </Card>
        </div>

        {/* CENTRO */}
        <div className="md:col-span-6">
          <Card>
            <div className="bg-green-600 text-white text-center py-2 font-bold flex justify-center gap-2">
              <ShoppingCart /> ITENS <ShoppingCart />
            </div>

            <CardContent className="p-6">
              <h4 className="text-green-600 font-bold mb-2">REFRIGERANTES</h4>

              <div className="bg-blue-100 p-4 relative">
                <p>Em breve teremos itens aqui.</p>

                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-2 right-2"
                >
                  <X />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* DIREITA */}
        <div className="md:col-span-3">
          <Card>
            <div className="p-4 flex justify-between">
              <h2 className="text-green-600 font-bold">Seu Pedido</h2>
              <ShoppingCart />
            </div>

            <CardContent className="text-center py-10">
              <p className="text-zinc-400">Sacola vazia</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
