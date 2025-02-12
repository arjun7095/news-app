export default function Pagination({ page, setPage }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        marginTop: "20px",
        padding: "10px",
        flexWrap: "wrap",
      }}
    >
      {/* Previous Button */}
      <button
        style={{
          padding: "8px 16px",
          fontSize: "16px",
          fontWeight: "bold",
          color: page <= 1 ? "#ccc" : "#fff",
          backgroundColor: page <= 1 ? "#e0e0e0" : "#007bff",
          border: "none",
          borderRadius: "5px",
          cursor: page <= 1 ? "not-allowed" : "pointer",
          transition: "background 0.3s ease",
          minWidth: "80px",
        }}
        disabled={page <= 1}
        onClick={() => setPage(page - 1)}
      >
        ← Prev
      </button>

      {/* Page Number */}
      <span
        style={{
          fontSize: "18px",
          fontWeight: "600",
          color: "#333",
          textAlign: "center",
          minWidth: "80px",
        }}
      >
        Page {page}
      </span>

      {/* Next Button */}
      <button
        style={{
          padding: "8px 16px",
          fontSize: "16px",
          fontWeight: "bold",
          color: "#fff",
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background 0.3s ease",
          minWidth: "80px",
        }}
        onClick={() => setPage(page + 1)}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Next →
      </button>
    </div>
  );
}

