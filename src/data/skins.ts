export interface WeaponSkin {
  id: string;
  name: string;
  weapon: string;
  category: "rifle" | "pistol" | "sniper" | "smg" | "shotgun";
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary";
  image: string;
  price: number;
  description: string;
}

export const weaponSkins: WeaponSkin[] = [
  {
    id: "1",
    name: "AK-47 Redline",
    weapon: "AK-47",
    category: "rifle",
    rarity: "epic",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
    price: 2500,
    description: "Легендарный красный дизайн для самого популярного автомата",
  },
  {
    id: "2",
    name: "AWP Dragon Lore",
    weapon: "AWP",
    category: "sniper",
    rarity: "legendary",
    image:
      "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400&h=300&fit=crop",
    price: 15000,
    description: "Мифический скин с драконом - мечта каждого снайпера",
  },
  {
    id: "3",
    name: "M4A4 Howl",
    weapon: "M4A4",
    category: "rifle",
    rarity: "legendary",
    image:
      "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=400&h=300&fit=crop",
    price: 8500,
    description: "Контрабандный скин с волком - раритет высшего класса",
  },
  {
    id: "4",
    name: "Glock-18 Fade",
    weapon: "Glock-18",
    category: "pistol",
    rarity: "rare",
    image:
      "https://images.unsplash.com/photo-1562887284-5c6c2c3d9755?w=400&h=300&fit=crop",
    price: 1200,
    description: "Стильный градиент от фиолетового к розовому",
  },
  {
    id: "5",
    name: "P90 Asiimov",
    weapon: "P90",
    category: "smg",
    rarity: "epic",
    image:
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=300&fit=crop",
    price: 3200,
    description: "Футуристический дизайн в оранжево-белых тонах",
  },
  {
    id: "6",
    name: "Desert Eagle Blaze",
    weapon: "Desert Eagle",
    category: "pistol",
    rarity: "epic",
    image:
      "https://images.unsplash.com/photo-1574182245530-967d9b3bb91c?w=400&h=300&fit=crop",
    price: 1800,
    description: "Огненный дизайн для мощного пистолета",
  },
];

export const categories = [
  { id: "all", name: "Все оружие" },
  { id: "rifle", name: "Винтовки" },
  { id: "pistol", name: "Пистолеты" },
  { id: "sniper", name: "Снайперские" },
  { id: "smg", name: "Пистолеты-пулемёты" },
  { id: "shotgun", name: "Дробовики" },
];
