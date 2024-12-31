import React from "react";
import { Box, Button } from "@mui/material";

const QuestSelector = ({ onSelectQuest }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap", // Разрешаем перенос строк
        justifyContent: "center", // Центрируем содержимое
        gap: 2, // Отступы между квадратами
        padding: 3,
        maxWidth: "1000px", // Ограничиваем максимальную ширину
        margin: "0 auto",
      }}
    >
      {Array.from({ length: 12 }, (_, index) => (
        <Button
          key={index}
          variant="contained"
          color="primary"
          sx={{
            width: "calc(33.33% - 16px)", // Три квадрата на строку
            height: "120px",
            fontSize: "1.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
          }}
          onClick={() => onSelectQuest(index + 1)}
        >
          {index + 1}
        </Button>
      ))}
    </Box>
  );
};

export default QuestSelector;
