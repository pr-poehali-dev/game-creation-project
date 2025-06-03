import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WeaponSkin } from "@/data/skins";
import Icon from "@/components/ui/icon";

interface SkinDetailsProps {
  skin: WeaponSkin;
  onClose: () => void;
}

const rarityColors = {
  common: "bg-gray-500",
  uncommon: "bg-green-500",
  rare: "bg-blue-500",
  epic: "bg-purple-500",
  legendary: "bg-orange-500",
};

const SkinDetails: React.FC<SkinDetailsProps> = ({ skin, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl bg-gradient-to-b from-gray-900 to-gray-800 border-gray-700 text-white">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl">{skin.name}</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <Icon name="X" size={20} />
          </Button>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="relative">
            <img
              src={skin.image}
              alt={skin.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <Badge
              className={`absolute top-4 right-4 ${rarityColors[skin.rarity]} text-white`}
            >
              {skin.rarity}
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm text-gray-400 mb-1">Оружие</h4>
              <p className="text-orange-400 font-semibold">{skin.weapon}</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-400 mb-1">Цена</h4>
              <p className="text-green-400 font-bold text-xl">${skin.price}</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm text-gray-400 mb-2">Описание</h4>
            <p className="text-gray-300">{skin.description}</p>
          </div>

          <div className="flex gap-2 pt-4">
            <Button className="flex-1 bg-orange-600 hover:bg-orange-700">
              <Icon name="ShoppingCart" size={16} />
              Купить
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300">
              <Icon name="Heart" size={16} />В избранное
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkinDetails;
