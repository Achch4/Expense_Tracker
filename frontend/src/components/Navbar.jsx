import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const linkClass = (path) =>
    `text-sm font-medium transition ${
      location.pathname === path
        ? "text-stone-900"
        : "text-stone-400 hover:text-stone-700"
    }`;

  return (
    <nav className="bg-white border-b border-stone-200 px-8 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        
        {/* Logo / App Name */}
        <h1 className="text-lg font-bold text-stone-800 tracking-tight">
          Finance Tracker
        </h1>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link to="/" className={linkClass("/")}>
            Dashboard
          </Link>
          <Link to="/add" className={linkClass("/add")}>
            Add
          </Link>
          <Link to="/transactions" className={linkClass("/transactions")}>
            Transactions
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;