import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("показывает компонент логина при запуске", () => {
  render(<App />);
  expect(screen.getByText(/войти/i)).toBeInTheDocument(); // Проверяем, что компонент логина отображается
});

test("переходит к выбору квестов после логина", () => {
  render(<App />);

  fireEvent.change(screen.getByLabelText(/логин/i), {
    target: { value: "Инночка" },
  });
  fireEvent.change(screen.getByLabelText(/пароль/i), {
    target: { value: "love" },
  });
  fireEvent.click(screen.getByText(/войти/i)); // Логинимся

  expect(screen.getByRole("button", { name: "1" })).toBeInTheDocument(); // Проверяем, что первый квадрат отображается
});

test("показывает квест при нажатии на квадрат", () => {
  render(<App />);

  // Логинимся
  fireEvent.change(screen.getByLabelText(/логин/i), {
    target: { value: "Инночка" },
  });
  fireEvent.change(screen.getByLabelText(/пароль/i), {
    target: { value: "love" },
  });
  fireEvent.click(screen.getByText(/войти/i));

  // Нажимаем на первый квадрат
  fireEvent.click(screen.getByRole("button", { name: "1" }));

  expect(screen.getByText(/квест 1/i)).toBeInTheDocument(); // Проверяем, что отображается первый квест
});

test("возвращает к выбору квестов после завершения квеста", () => {
  render(<App />);

  // Логинимся
  fireEvent.change(screen.getByLabelText(/логин/i), {
    target: { value: "Инночка" },
  });
  fireEvent.change(screen.getByLabelText(/пароль/i), {
    target: { value: "love" },
  });
  fireEvent.click(screen.getByText(/войти/i));

  // Нажимаем на первый квадрат
  fireEvent.click(screen.getByRole("button", { name: "1" }));

  // Завершаем квест
  fireEvent.click(screen.getByText(/Вернуться к выбору квестов/i));

  expect(screen.getByRole("button", { name: "1" })).toBeInTheDocument();
});
