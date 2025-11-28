import React, { useState } from "react";
import {
  increment,
  decrement,
  incrementByAmount,
  fetchIncreamentAmount,
} from "../store/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "../store";

export const Counter = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.counter.value);
  const status = useAppSelector((state) => state.counter.status);

  const [amount, setAmount] = useState(2);

  const addAmount = () => {
    dispatch(incrementByAmount(Number(amount) || 0));
  };

  const addAsync = () => {
    dispatch(fetchIncreamentAmount(Number(amount) || 0));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Counter</h2>
      <div style={{ fontSize: 24, marginBottom: 8 }}>Value: {value}</div>

      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())} style={{ marginLeft: 8 }}>
        +
      </button>

      <div style={{ marginTop: 12 }}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          style={{ width: 80 }}
        />
        <button onClick={addAmount} style={{ marginLeft: 8 }}>
          Add amount
        </button>
        <button onClick={addAsync} style={{ marginLeft: 8 }}>
          Add async (simulated)
        </button>
        <span style={{ marginLeft: 12 }}>
          {status === "loading" ? "Loading..." : null}
        </span>
      </div>
    </div>
  );
};


