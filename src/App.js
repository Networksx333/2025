import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./components/Login";
import QuestSelector from "./components/QuestSelector";
import Quest1 from "./components/quests/Quest1";
import Quest2 from "./components/quests/Quest2"; // Подключаем квесты
import { CssBaseline, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import cupertinoTheme from "./theme";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedQuest, setSelectedQuest] = useState(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const renderQuest = () => {
    switch (selectedQuest) {
      case 1:
        return <Quest1 onComplete={() => setSelectedQuest(null)} />;
      case 2:
        return <Quest2 onComplete={() => setSelectedQuest(null)} />;
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={cupertinoTheme}>
      <CssBaseline />
      <Provider store={store}>
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f4f4f4",
            padding: 2,
          }}
        >
          {!isLoggedIn ? (
            <Login onLogin={handleLogin} />
          ) : selectedQuest ? (
            renderQuest()
          ) : (
            <QuestSelector onSelectQuest={setSelectedQuest} />
          )}
        </Box>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
