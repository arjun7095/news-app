import { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

const Header = ({ query, setQuery, handleSearch, isVisible }) => {
  return (
    <nav
      style={{
        backgroundColor: "#007bff",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        flexWrap: "wrap",
        position: "fixed",
        width: "100%",
        top: isVisible ? "0" : "-70px", // Hide header when scrolling down
        left: "0",
        transition: "top 0.3s ease-in-out",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: "1000",
      }}
    >
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
        News Portal
      </h1>
      <form
        onSubmit={handleSearch}
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search news..."
          style={{
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            width: "250px",
            maxWidth: "100%",
            fontSize: "16px",
          }}
        />
        <button
          type="submit"
          style={{
            marginLeft: "10px",
            padding: "10px 15px",
            backgroundColor: "white",
            color: "#007bff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            marginRight:"30px"
          }}
        >
          Search
        </button>
      </form>
    </nav>
  );
};

export default function Search() {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0); // Number of visible articles

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
      );
      setArticles(response.data.articles);
      setVisibleCount(0); // Reset visible articles
      revealArticlesGradually(response.data.articles.length); // Start showing articles one by one
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const revealArticlesGradually = (totalArticles) => {
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setVisibleCount((prev) => prev + 1);
      if (count >= totalArticles) clearInterval(interval);
    }, 500); // Adjust the time delay (500ms) for a smoother effect
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "80px" }}>
      <Header query={query} setQuery={setQuery} handleSearch={handleSearch} isVisible={isVisible} />

      <div
        style={{
          
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          padding: "20px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {articles.slice(0, visibleCount).map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
}
