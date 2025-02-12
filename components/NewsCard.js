export default function NewsCard({ article }) {
  // Check if article exists and has required data
  if (!article || !article.title || !article.url || !article.urlToImage) return null;

  return (
    <div
      style={{
        width: "600px",
        padding: "20px 100px",
        margin: "20px auto",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
      className="news-card"
    >
      {/* Image */}
      <img
        src={article.urlToImage}
        alt={article.title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
        className="news-image"
      />

      {/* News Content */}
      <div style={{ marginTop: "15px", padding: "0 20px" }} className="news-content">
        <h2
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            color: "#2c3e50",
            marginBottom: "10px",
          }}
          className="news-title"
        >
          {article.title}
        </h2>

        {article.description && (
          <p
            style={{
              fontSize: "16px",
              color: "#555",
              lineHeight: "1.5",
              marginBottom: "15px",
            }}
            className="news-description"
          >
            {article.description}
          </p>
        )}

        {/* Footer Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginTop: "15px",
            padding: "10px 0",
            borderTop: "1px solid #eee",
          }}
          className="news-footer"
        >
          <span
            style={{
              fontSize: "14px",
              color: "#888",
              fontStyle: "italic",
            }}
            className="news-source"
          >
            {article.source?.name || "Unknown Source"}
          </span>

          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "600",
              color: "#007bff",
              transition: "color 0.3s",
            }}
            className="read-more"
            onMouseOver={(e) => (e.target.style.color = "#0056b3")}
            onMouseOut={(e) => (e.target.style.color = "#007bff")}
          >
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
}
