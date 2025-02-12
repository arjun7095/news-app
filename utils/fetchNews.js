import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

export const fetchTopHeadlines = async (page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/top-headlines?country=us&page=${page}&apiKey=${API_KEY}`
    );
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching top headlines:", error);
    return [];
  }
};

export const fetchNewsByCategory = async (category, page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/top-headlines?category=${category}&country=us&page=${page}&apiKey=${API_KEY}`
    );
    return response.data.articles;
  } catch (error) {
    console.error(`Error fetching ${category} news:`, error);
    return [];
  }
};

export const searchNews = async (query, page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/everything?q=${query}&page=${page}&apiKey=${API_KEY}`
    );
    return response.data.articles;
  } catch (error) {
    console.error("Error searching news:", error);
    return [];
  }
};
