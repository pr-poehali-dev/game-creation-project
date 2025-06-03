import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WeaponSkin } from "@/data/skins";

interface SkinCardProps {
  skin: WeaponSkin;
  onViewDetails: (skin: WeaponSkin) => void;
}

const rarityColors = {
  common: "bg-gray-500",
  uncommon: "bg-green-500",
  rare: "bg-blue-500",
  epic: "bg-purple-500",
  legendary: "bg-orange-500",
};

const SkinCard: React.FC<SkinCardProps> = ({ skin, onViewDetails }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-gradient-to-b from-gray-900 to-gray-800 border-gray-700">
      <div className="relative">
        <img
          src={skin.image}
          alt={skin.name}
          className="w-full h-48 object-cover"
        />
        <Badge
          className={`absolute top-2 right-2 ${rarityColors[skin.rarity]} text-white`}
          variant="secondary"
        >
          {skin.rarity}
        </Badge>
      </div>

      <CardContent className="p-4 text-white">
        <h3 className="text-lg font-bold mb-1">{skin.name}</h3>
        <p className="text-orange-400 text-sm mb-2">{skin.weapon}</p>
        <p className="text-gray-300 text-xs line-clamp-2">{skin.description}</p>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <span className="text-green-400 font-bold">${skin.price}</span>
        <Button
          size="sm"
          onClick={() => onViewDetails(skin)}
          className="bg-orange-600 hover:bg-orange-700"
        >
          Подробнее
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SkinCard;
