import { useState, useCallback } from "react";

type Player = "X" | "O";
type GameStatus = "playing" | "won" | "draw";

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // columns
  [0, 4, 8],
  [2, 4, 6], // diagonals
];

export const useTicTacToe = () => {
  const [board, setBoard] = useState<(Player | null)[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [gameStatus, setGameStatus] = useState<GameStatus>("playing");
  const [winner, setWinner] = useState<Player | null>(null);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);
  const [draws, setDraws] = useState(0);

  const checkWinner = useCallback((board: (Player | null)[]) => {
    for (const combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return { winner: board[a] as Player, line: combination };
      }
    }
    return null;
  }, []);

  const makeMove = useCallback(
    (index: number) => {
      if (board[index] !== null || gameStatus !== "playing") return;

      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);

      const result = checkWinner(newBoard);
      if (result) {
        setGameStatus("won");
        setWinner(result.winner);
        setWinningLine(result.line);
        if (result.winner === "X") {
          setScoreX((prev) => prev + 1);
        } else {
          setScoreO((prev) => prev + 1);
        }
      } else if (newBoard.every((cell) => cell !== null)) {
        setGameStatus("draw");
        setDraws((prev) => prev + 1);
      } else {
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      }
    },
    [board, currentPlayer, gameStatus, checkWinner],
  );

  const startNewGame = useCallback(() => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setGameStatus("playing");
    setWinner(null);
    setWinningLine(null);
  }, []);

  const resetScore = useCallback(() => {
    startNewGame();
    setScoreX(0);
    setScoreO(0);
    setDraws(0);
  }, [startNewGame]);

  return {
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
  };
};
