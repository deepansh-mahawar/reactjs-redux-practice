import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./features/Cart";
import Content from "./features/Content";
import { Counter } from "./features/Counter";
import { FoodList } from "./features/FoodList";
import { LightBulb } from "./features/LightBulb";
import Sidebar from "./features/Sidebar";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <h2>Loading...</h2>;

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
