import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          S<sup>2</sup>
        </h1>

        <Link
          to="/create-post"
          className="bg-black text-white px-5 py-2 rounded-xl hover:opacity-90 transition"
        >
          + Add Post
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
