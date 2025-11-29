import React, { useEffect } from "react";

import { fetchUsers } from "../store/slices/usersSlice";
import { useAppDispatch, useAppSelector } from "../store";

export const UserList = () => {
  const dispatch = useAppDispatch();

  const { list, loading, error } = useAppSelector((state) => state.users);

  console.log("user list", list);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p style={{ color: "blue" }}>Loading users...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd" }}>
      <h2 style={{ color: "#333" }}>User List</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {list.map((user) => (
          <li
            key={user.id}
            style={{
              padding: "10px",
              marginBottom: "8px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              background: "#f9f9f9",
            }}
          >
            <strong style={{ color: "#000" }}>{user.name}</strong> —{" "}
            <span style={{ color: "#555" }}>{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
