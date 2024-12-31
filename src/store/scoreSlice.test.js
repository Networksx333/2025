import scoreReducer, { increment } from "./scoreSlice";

describe("score reducer", () => {
  it("должен возвращать начальное состояние", () => {
    expect(scoreReducer(undefined, {})).toEqual({ points: 0 });
  });

  it("увеличивает очки при вызове increment", () => {
    const initialState = { points: 0 };
    const newState = scoreReducer(initialState, increment(100));
    expect(newState.points).toEqual(100);
  });
});
