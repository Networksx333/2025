import React, { useState } from "react";
import { Box, TextField, Button, Typography, Alert } from "@mui/material";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "Инночка" && password === "love") {
      onLogin();
    } else {
      setError("Неправильный логин или пароль");
    }
  };

  return (
    <Box sx={{}}>
      <Typography variant="h4" gutterBottom>
        Добро пожаловать, Инночка!
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "300px",
          p: 3,
          background: "#ffffff22",
          borderRadius: 2,
        }}
      >
        <TextField
          label="Логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
        />
        <TextField
          label="Пароль"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          fullWidth
          sx={{ mt: 1 }}
        >
          Войти
        </Button>
      </Box>
      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
    </Box>
  );
};

export default Login;
