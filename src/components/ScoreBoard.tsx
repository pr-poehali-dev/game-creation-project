import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ScoreBoardProps {
  scoreX: number;
  scoreO: number;
  draws: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ scoreX, scoreO, draws }) => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center text-lg">Счёт</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-primary/10 rounded-lg p-3">
            <div className="text-2xl font-bold text-primary">X</div>
            <div className="text-sm text-gray-600">Игрок X</div>
            <div className="text-xl font-semibold text-primary">{scoreX}</div>
          </div>
          <div className="bg-gray-100 rounded-lg p-3">
            <div className="text-2xl font-bold text-gray-600">🤝</div>
            <div className="text-sm text-gray-600">Ничьи</div>
            <div className="text-xl font-semibold text-gray-600">{draws}</div>
          </div>
          <div className="bg-destructive/10 rounded-lg p-3">
            <div className="text-2xl font-bold text-destructive">O</div>
            <div className="text-sm text-gray-600">Игрок O</div>
            <div className="text-xl font-semibold text-destructive">
              {scoreO}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScoreBoard;
