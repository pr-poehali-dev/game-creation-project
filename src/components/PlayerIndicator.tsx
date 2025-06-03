import React from "react";
import { cn } from "@/lib/utils";

interface PlayerIndicatorProps {
  currentPlayer: "X" | "O";
  gameStatus: "playing" | "won" | "draw";
  winner?: "X" | "O" | null;
}

const PlayerIndicator: React.FC<PlayerIndicatorProps> = ({
  currentPlayer,
  gameStatus,
  winner,
}) => {
  const getStatusText = () => {
    if (gameStatus === "won" && winner) {
      return `🎉 Игрок ${winner} победил!`;
    }
    if (gameStatus === "draw") {
      return "🤝 Ничья!";
    }
    return `Ход игрока ${currentPlayer}`;
  };

  const getStatusColor = () => {
    if (gameStatus === "won") return "text-green-600";
    if (gameStatus === "draw") return "text-orange-600";
    return currentPlayer === "X" ? "text-primary" : "text-destructive";
  };

  return (
    <div className="text-center">
      <div
        className={cn(
          "text-2xl font-bold transition-all duration-300 animate-fade-in",
          getStatusColor(),
        )}
      >
        {getStatusText()}
      </div>
      {gameStatus === "playing" && (
        <div className="mt-2 flex justify-center">
          <div
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-transform duration-300 animate-pulse",
              currentPlayer === "X"
                ? "bg-primary/20 text-primary"
                : "bg-destructive/20 text-destructive",
            )}
          >
            {currentPlayer}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerIndicator;
