import { useAppDispatch, useAppSelector } from "../store";
import { toggle } from "../store/slices/lightSlice";

export const LightBulb = () => {
  const dispatch = useAppDispatch();
  const isOn = useAppSelector((state) => state.light.isOn);

  return (
    <div style={{ padding: 20 }}>
      <h2>💡 Light is: {isOn ? "ON" : "OFF"}</h2>
      <button onClick={() => dispatch(toggle())}>Toggle</button>
    </div>
  );
};
