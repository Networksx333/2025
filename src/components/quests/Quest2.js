import React, { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { Box, Typography, Button } from "@mui/material";

const Rh5CheckmateQuest = ({ onComplete }) => {
  // Устанавливаем начальную позицию по FEN
  const [chess] = useState(
    new Chess("r5r1/1p2nppk/2b1pPp1/4R3/5P2/1P1q3P/4Q1P1/1B4KR w - - 0 1")
  );
  const [message, setMessage] = useState("");

  const handleMove = (sourceSquare, targetSquare) => {
    const move = chess.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // На случай превращения пешки
    });

    if (!move) {
      setMessage("Неверный ход. Попробуйте снова.");
      return false; // Откат
    }

    // Проверяем, не является ли текущая позиция матом
    if (chess.inCheckmate()) {
      setMessage("Поздравляем! Мат ходом Rh5#.");
      setTimeout(onComplete, 2000);
      return true; // Не откатываем
    }

    setMessage("Это не мат. Попробуйте снова.");
    return true;
  };

  return (
    <Box sx={{ textAlign: "center", padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Квест: Найдите мат ходом Rh5#
      </Typography>
      <Typography variant="body1" gutterBottom>
        Позиция: белые начинают. Найдите единственный ход, который завершает
        партию матом.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 3 }}>
        <Chessboard
          position={chess.fen()}
          onPieceDrop={handleMove}
          boardWidth={400}
          customBoardStyle={{
            borderRadius: "5px",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
          }}
        />
      </Box>
      {message && (
        <Typography variant="body1" sx={{ color: "red", marginBottom: 2 }}>
          {message}
        </Typography>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          chess.load(
            "r5r1/1p2nppk/2b1pPp1/4R3/5P2/1P1q3P/4Q1P1/1B4KR w - - 0 1"
          );
          setMessage("");
        }}
      >
        Начать заново
      </Button>
      <Button
        variant="text"
        color="secondary"
        onClick={onComplete}
        sx={{ marginLeft: 2 }}
      >
        Вернуться к выбору квестов
      </Button>
    </Box>
  );
};

export default Rh5CheckmateQuest;
