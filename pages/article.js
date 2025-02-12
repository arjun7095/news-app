import { useRouter } from "next/router";
import Header from "../components/Header";

export default function ArticlePage() {
  const router = useRouter();
  const { url } = router.query;

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        {url ? (
          <iframe
            src={decodeURIComponent(url)}
            className="w-full h-screen border rounded-lg"
          />
          
        ) : (
          <p className="text-center text-red-500">Invalid Article URL</p>
        )}
      </div>
    </div>
  );
}
