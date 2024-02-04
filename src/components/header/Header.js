import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">
          Multimind
        </Link>
      </nav>
    </>
  );
}
