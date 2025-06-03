import React from "react";
import SkinGallery from "@/components/SkinGallery";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-red-600 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Target" size={32} className="text-white" />
              <div>
                <h1 className="text-3xl font-bold text-white">CS 1.6 Skins</h1>
                <p className="text-orange-100 text-sm">
                  Лучшие скины для Counter-Strike
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Icon
                name="Search"
                className="text-white cursor-pointer hover:text-orange-200"
              />
              <Icon
                name="Heart"
                className="text-white cursor-pointer hover:text-orange-200"
              />
              <Icon
                name="ShoppingCart"
                className="text-white cursor-pointer hover:text-orange-200"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Коллекция премиум скинов
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Откройте для себя самые редкие и красивые скины для CS 1.6. От
            легендарных AK-47 до мифических AWP - найдите свой идеальный стиль.
          </p>
          <div className="flex justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={20} className="text-green-400" />
              <span>Гарантия качества</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Zap" size={20} className="text-blue-400" />
              <span>Мгновенная доставка</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="TrendingUp" size={20} className="text-orange-400" />
              <span>Лучшие цены</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery */}
      <main className="container mx-auto px-4 pb-12">
        <SkinGallery />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2025 CS 1.6 Skins. Все права защищены.</p>
          <p className="text-sm mt-2">
            Лучшие скины для настоящих профессионалов
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
