
import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">News Portal</h1>
      <div>
        <Link href="/">Home</Link>
        <Link href="/search" className="ml-4">Search</Link>
        
      </div>
    </nav>
  );
};

export default Header;
