import React from "react";
import GameBoard from "@/components/GameBoard";
import PlayerIndicator from "@/components/PlayerIndicator";
import ScoreBoard from "@/components/ScoreBoard";
import GameControls from "@/components/GameControls";
import { useTicTacToe } from "@/hooks/useTicTacToe";

const Index = () => {
  const {
    board,
    currentPlayer,
    gameStatus,
    winner,
    winningLine,
    scoreX,
    scoreO,
    draws,
    makeMove,
    startNewGame,
    resetScore,
  } = useTicTacToe();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 font-rubik">
            Крестики-нолики
          </h1>
          <p className="text-gray-600">Классическая игра для двоих</p>
        </div>

        <PlayerIndicator
          currentPlayer={currentPlayer}
          gameStatus={gameStatus}
          winner={winner}
        />

        <div className="flex justify-center">
          <GameBoard
            board={board}
            onCellClick={makeMove}
            winningLine={winningLine}
          />
        </div>

        <ScoreBoard scoreX={scoreX} scoreO={scoreO} draws={draws} />

        <GameControls onNewGame={startNewGame} onResetScore={resetScore} />
      </div>
    </div>
  );
};

export default Index;
