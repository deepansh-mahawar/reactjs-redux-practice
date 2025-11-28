import "./App.css";
import Cart from "./features/Cart";
import { Counter } from "./features/Counter";
import { FoodList } from "./features/FoodList";
import { LightBulb } from "./features/LightBulb";

function App() {
  return (
    <div>
      <h1>Vite + React + Redux Toolkit</h1>
      {/* <Counter /> */}
      {/* <LightBulb/> */}
      {/* <FoodList/> */}
      <Cart/>
    </div>
  );
}

export default App;
