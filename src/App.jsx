import "./App.css";
import Cart from "./features/Cart";
import Content from "./features/Content";
import { Counter } from "./features/Counter";
import { FoodList } from "./features/FoodList";
import { LightBulb } from "./features/LightBulb";
import Sidebar from "./features/Sidebar";

function App() {
  return (
    <div style={{ display: "flex" }}>
      {/* <h1>Vite + React + Redux Toolkit</h1> */}
      {/* <Counter /> */}
      {/* <LightBulb/> */}
      {/* <FoodList/> */}
      {/* <Cart/> */}
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
