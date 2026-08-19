import { Link, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();

  const linkClass = (path) =>
    `text-sm font-medium transition ${
      location.pathname === path
        ? "text-stone-900"
        : "text-stone-400 hover:text-stone-700"
    }`;
  const [theme, setTheme] = useState('');
  return (
    <nav className={`${theme ? "dark" : "" } bg-white dark:bg-zinc-800 border-b border-stone-200 px-8 py-4`}>
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="flex items-center justify-between gap-3">
          {/* Logo / App Name */}
          <h1 className="text-lg font-bold text-stone-800 tracking-tight">
            Finance Tracker
          </h1>
          <div className="bg-zinc-100 dark:bg-zinc-700 p-2 rounded-xl">
            <button
            onClick={()=> {
              setTheme("");
            }}
            className="bg-transparent p-3 hover:bg-zinc-200 dark:hover:bg-zinc-100/10 rounded-lg text-black dark:text-white">
              <Sun />
            </button>
            <button 
             onClick={()=> {
              setTheme("dark");
            }}
            className="bg-transparent p-3 hover:bg-zinc-200 dark:hover:bg-zinc-100/10 rounded-lg text-black dark:text-white">
              <Moon />
            </button>
          </div>
        </div>

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
