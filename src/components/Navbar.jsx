import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">AgriConnect</h1>

        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;