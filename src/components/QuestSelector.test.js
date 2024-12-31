import { render, screen, fireEvent } from "@testing-library/react";
import QuestSelector from "./QuestSelector";

test("отображает 12 квадратов", () => {
  const mockSelectQuest = jest.fn();
  render(<QuestSelector onSelectQuest={mockSelectQuest} />);

  const buttons = screen.getAllByRole("button");
  expect(buttons).toHaveLength(12); // Проверяем, что есть 12 кнопок
});

test("вызывает onSelectQuest при нажатии на квадрат", () => {
  const mockSelectQuest = jest.fn();
  render(<QuestSelector onSelectQuest={mockSelectQuest} />);

  const firstButton = screen.getByText("1");
  fireEvent.click(firstButton);

  expect(mockSelectQuest).toHaveBeenCalledWith(1); // Проверяем вызов функции с правильным индексом
});
