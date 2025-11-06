import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-full bg-blue-500 py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">The Dojo Blog</h1>
          <div className="space-x-4">
            <Link to="/" className="text-white hover:text-blue-200">Home</Link>
            <Link to="/create" className="text-white hover:text-blue-200">New Blog</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
