import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/add">Add</Link>
      <Link to="/transactions">Transactions</Link>
    </nav>
  );
};

export default Navbar;