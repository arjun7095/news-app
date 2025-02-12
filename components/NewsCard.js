import { useState, useEffect } from "react";

export default function NewsCard({ article }) {
  if (!article || !article.title || !article.url || !article.urlToImage) return null;

  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isSmallScreen = windowWidth <= 480;

  return (
    <div
      style={{
        width: isSmallScreen ? "100%" : isMobile ? "90%" : "600px",
        padding: isSmallScreen ? "10px" : isMobile ? "15px" : "20px 100px",
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
    >
      {/* Image */}
      <img
        src={article.urlToImage}
        alt={article.title}
        style={{
          width: "100%",
          height: isSmallScreen ? "200px" : isMobile ? "250px" : "300px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      {/* News Content */}
      <div style={{ marginTop: "15px", padding: "0 20px" }}>
        <h2
          style={{
            fontSize: isSmallScreen ? "16px" : isMobile ? "18px" : "22px",
            fontWeight: "bold",
            color: "#2c3e50",
            marginBottom: "10px",
          }}
        >
          {article.title}
        </h2>

        {article.description && (
          <p
            style={{
              fontSize: isSmallScreen ? "13px" : isMobile ? "14px" : "16px",
              color: "#555",
              lineHeight: "1.5",
              marginBottom: "15px",
            }}
          >
            {article.description}
          </p>
        )}

        {/* Footer Section */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginTop: "15px",
            padding: "10px 0",
            borderTop: "1px solid #eee",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              color: "#888",
              fontStyle: "italic",
              marginBottom: isMobile ? "10px" : "0",
            }}
          >
            {article.source?.name || "Unknown Source"}
          </span>

          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              fontSize: isSmallScreen ? "13px" : "16px",
              fontWeight: "600",
              color: "#007bff",
              transition: "color 0.3s",
            }}
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
