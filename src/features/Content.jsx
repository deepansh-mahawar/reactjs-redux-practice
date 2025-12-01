import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import {
  fetchPosts,
  nextPage,
  prevPage,
  removePost,
} from "../store/slices/postSlice";

export default function Content() {
  const dispatch = useAppDispatch();
  const { list, viewType, loading, currentPage, postsPerPage } = useAppSelector(
    (state) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <h2 style={{ padding: "20px" }}>Loading...</h2>;

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = list.slice(indexOfFirst, indexOfLast);

  return (
    <div style={{ padding: "20px", width: "100%" }}>
      {/* Posts */}
      <div style={viewType === "list" ? styles.list : styles.grid}>
        {currentPosts.map((post) => (
          <div key={post.id} style={styles.card}>
            <button
              style={styles.closeBtn}
              onClick={() => dispatch(removePost(post.id))}
            >
              ✖
            </button>

            <h3 style={{color: '#000000'}}>{post.title}</h3>
            <p style={{color: '#000000'}}>{post.body}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div style={styles.pagination}>
        <button
          onClick={() => dispatch(prevPage())}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <span>Page {currentPage}</span>

        <button
          onClick={() => dispatch(nextPage())}
          disabled={indexOfLast >= list.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

const styles = {
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "15px",
  },
  card: {
    position: "relative",
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    background: "#fff",
  },
  closeBtn: {
    position: "absolute",
    top: "8px",
    right: "8px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: "18px",
    color: "red",
  },
  pagination: {
    marginTop: "25px",
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
};
