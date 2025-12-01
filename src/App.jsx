import "./App.css";
import Cart from "./features/Cart";
import { Counter } from "./features/Counter";
import { FoodList } from "./features/FoodList";
import { LightBulb } from "./features/LightBulb";
import { UserList } from "./features/userList";
import UserData from "./features/UserData";

function App() {
  return (
    <div>
      <h1>Vite + React + Redux Toolkit</h1>
      {/* <Counter /> */}
      {/* <LightBulb/> */}
      {/* <FoodList/> */}
      {/* <Cart/> */}
      {/* <UserList /> */}
      <UserData />
    </div>
  );
}

export default App;
