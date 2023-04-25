import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
        My Cute Pokemon!
      </Link>
    </header>
  );
}

export default Header;
