import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface GameControlsProps {
  onNewGame: () => void;
  onResetScore: () => void;
}

const GameControls: React.FC<GameControlsProps> = ({
  onNewGame,
  onResetScore,
}) => {
  return (
    <div className="flex gap-3 justify-center">
      <Button onClick={onNewGame} className="flex items-center gap-2 px-6">
        <Icon name="RotateCcw" size={16} />
        Новая игра
      </Button>
      <Button
        variant="outline"
        onClick={onResetScore}
        className="flex items-center gap-2 px-6"
      >
        <Icon name="Trash2" size={16} />
        Сбросить счёт
      </Button>
    </div>
  );
};

export default GameControls;
