import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import NewsCard from "../components/NewsCard";
import Pagination from "../components/Pagination";

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2/top-headlines";

export default function CategoryNews() {
  const router = useRouter();
  const { category } = router.query;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!category) return;
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}?category=${category}&country=us&page=${page}&apiKey=${API_KEY}`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching category news:", error);
      }
      setLoading(false);
    };
    fetchNews();
  }, [category, page]);

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 capitalize">{category} News</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {articles.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>
        )}
        <Pagination page={page} setPage={setPage} />
      </div>
    </div>
  );
}
