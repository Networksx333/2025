import React, { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";

const Quest1 = ({ onComplete }) => {
  const riddles = [
    {
      question:
        "Инне позавчера было 5 лет, а в следующем году ей исполнится 8. Возможно ли это?",
      correctAnswer: "Да",
      explanation:
        "Это возможно, если сегодня 1 января, а Инна родилась 31 декабря. 30 декабря ей было еще 5, а 31-го исполнилось 6. В этом году ей будет 7, а в следующем — 8.",
      options: ["Да", "Нет"],
    },
    {
      question:
        "На столе стоит всегда. Любит вся его страна. В нем порою даже спят. Гости все его хотят.",
      correctAnswer: "Оливье",
      explanation: "Правильный ответ — 'Оливье', популярное праздничное блюдо.",
      options: null, // null означает, что это текстовый ввод
    },
  ];

  const [currentRiddleIndex, setCurrentRiddleIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [showExplanation, setShowExplanation] = useState(false);

  const currentRiddle = riddles[currentRiddleIndex];

  const handleAnswer = () => {
    if (
      currentRiddle.options &&
      currentRiddle.correctAnswer === answer.trim()
    ) {
      setShowExplanation(true);
    } else if (
      !currentRiddle.options &&
      currentRiddle.correctAnswer.toLowerCase() === answer.trim().toLowerCase()
    ) {
      setShowExplanation(true);
    }
  };

  const handleNextRiddle = () => {
    setShowExplanation(false);
    setAnswer("");
    if (currentRiddleIndex + 1 < riddles.length) {
      setCurrentRiddleIndex(currentRiddleIndex + 1);
    } else {
      onComplete(); // Завершение квеста
    }
  };

  return (
    <Box sx={{ textAlign: "center", padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Квест 1
      </Typography>
      <Typography variant="h5" gutterBottom>
        {currentRiddle.question}
      </Typography>
      {currentRiddle.options ? (
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          {currentRiddle.options.map((option) => (
            <Button
              key={option}
              variant="contained"
              color="primary"
              onClick={() => setAnswer(option)}
            >
              {option}
            </Button>
          ))}
        </Box>
      ) : (
        <TextField
          placeholder="Введите ответ"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          fullWidth
          sx={{ mt: 2 }}
        />
      )}
      <Box sx={{ marginTop: 3 }}>
        {showExplanation ? (
          <>
            <Typography variant="body1" gutterBottom>
              {currentRiddle.explanation}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleNextRiddle}
            >
              {currentRiddleIndex + 1 < riddles.length
                ? "Следующая загадка"
                : "Завершить квест"}
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={handleAnswer}
            disabled={!answer}
          >
            Проверить
          </Button>
        )}
      </Box>
      <Button
        variant="text"
        color="secondary"
        sx={{ marginTop: 3 }}
        onClick={onComplete}
      >
        Вернуться к выбору квестов
      </Button>
    </Box>
  );
};

export default Quest1;
