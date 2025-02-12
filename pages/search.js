import { useState } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import Header from "../components/Header";

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

export default function Search() {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
      setArticles(response.data.articles);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <form onSubmit={handleSearch} className="mb-4">
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="p-2 border rounded" placeholder="Search news..." />
          <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded">Search</button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {articles.map((article, index) => <NewsCard key={index} article={article} />)}
        </div>
      </div>
    </div>
  );
}
