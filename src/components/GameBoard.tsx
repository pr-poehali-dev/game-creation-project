import React from "react";
import { cn } from "@/lib/utils";

interface GameBoardProps {
  board: (string | null)[];
  onCellClick: (index: number) => void;
  winningLine: number[] | null;
}

const GameBoard: React.FC<GameBoardProps> = ({
  board,
  onCellClick,
  winningLine,
}) => {
  return (
    <div className="grid grid-cols-3 gap-2 bg-white p-4 rounded-2xl shadow-lg">
      {board.map((cell, index) => (
        <button
          key={index}
          onClick={() => onCellClick(index)}
          disabled={cell !== null}
          className={cn(
            "w-20 h-20 rounded-xl border-2 border-gray-200 flex items-center justify-center text-3xl font-bold transition-all duration-200 hover:border-primary hover:shadow-md",
            cell === "X" && "text-primary bg-primary/5",
            cell === "O" && "text-destructive bg-destructive/5",
            winningLine?.includes(index) &&
              "bg-green-100 border-green-400 animate-pulse",
            !cell && "hover:bg-gray-50 cursor-pointer",
            cell && "cursor-not-allowed",
          )}
        >
          {cell && <span className="animate-scale-in">{cell}</span>}
        </button>
      ))}
    </div>
  );
};

export default GameBoard;
