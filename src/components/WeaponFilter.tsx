import React from "react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/skins";

interface WeaponFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const WeaponFilter: React.FC<WeaponFilterProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category.id)}
          className={
            activeCategory === category.id
              ? "bg-orange-600 hover:bg-orange-700"
              : "border-gray-600 text-gray-300 hover:bg-gray-700"
          }
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default WeaponFilter;
