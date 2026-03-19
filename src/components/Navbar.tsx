import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/learn", label: "Home" },
    { to: "/courses", label: "Courses" },
    { to: "/about", label: "About" },
  ];
  const isActive = (path: string) => location.pathname === path;
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc", display: "flex", gap: "1rem" }}>
      <Link to="/learn" style={{ fontWeight: "bold" }}>🔬 RFI E-Learning</Link>
      {links.map((l) => (
        <Link key={l.to} to={l.to} style={{ color: isActive(l.to) ? "blue" : "gray" }}>
          {l.label}
        </Link>
      ))}
      <Link to="/login" style={{ marginLeft: "auto" }}>Sign In</Link>
    </nav>
  );
};

export default Navbar;