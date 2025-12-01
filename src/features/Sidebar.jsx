import { useAppDispatch, useAppSelector } from "../store";
import { toggleView } from "../store/slices/postSlice";

export default function Sidebar() {
  const dispatch = useAppDispatch();
  const viewType = useAppSelector((state) => state.posts.viewType);
  return (
    <div
      style={{
        width: "250px",
        backgroundColor: "#f4f4f4",
        height: "100vh",
        padding: "20px",
        boxSizing: "border-box",
        margin: "20px",
        borderRadius: "8px",
      }}
    >
      <div style={{ marginBottom: "30px", textAlign: "center" }}>
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="profile"
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
          }}
        />
        <h3 style={{ color: "black" }}>John Doe</h3>
        <p style={{ color: "black" }}>john.doe@example.com</p>
      </div>
      <button
        onClick={() => dispatch(toggleView())}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        Switch to {viewType === "list" ? "grid" : "list"}
      </button>

      <button
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "blue",
          color: "white",
          cursor: "pointer",
        }}
      >
        Contact Us
      </button>
    </div>
  );
}
