import React, { useState } from "react";
import { weaponSkins, WeaponSkin } from "@/data/skins";
import SkinCard from "@/components/SkinCard";
import WeaponFilter from "@/components/WeaponFilter";
import SkinDetails from "@/components/SkinDetails";

const SkinGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedSkin, setSelectedSkin] = useState<WeaponSkin | null>(null);

  const filteredSkins =
    activeCategory === "all"
      ? weaponSkins
      : weaponSkins.filter((skin) => skin.category === activeCategory);

  const handleViewDetails = (skin: WeaponSkin) => {
    setSelectedSkin(skin);
  };

  return (
    <div className="space-y-6">
      <WeaponFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkins.map((skin) => (
          <SkinCard
            key={skin.id}
            skin={skin}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>

      {selectedSkin && (
        <SkinDetails
          skin={selectedSkin}
          onClose={() => setSelectedSkin(null)}
        />
      )}
    </div>
  );
};

export default SkinGallery;
