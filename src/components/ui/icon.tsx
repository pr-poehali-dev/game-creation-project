import React from "react";
import {
  X,
  ShoppingCart,
  Heart,
  Filter,
  Search,
  Star,
  TrendingUp,
  Shield,
  Zap,
  Target,
} from "lucide-react";

const icons = {
  X,
  ShoppingCart,
  Heart,
  Filter,
  Search,
  Star,
  TrendingUp,
  Shield,
  Zap,
  Target,
};

interface IconProps {
  name: keyof typeof icons;
  size?: number;
  className?: string;
  fallback?: keyof typeof icons;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className = "",
  fallback = "Shield",
}) => {
  const IconComponent = icons[name] || icons[fallback];

  return <IconComponent size={size} className={className} />;
};

export default Icon;
