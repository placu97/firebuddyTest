import React from "react";

export default function Navbar() {
  return (
    // <header className="sticky top-0 z-50">
    <nav className="container flex justify-between items-center w-full font-kd ">
      <div className="navbar bg-secondary rounded-full border-4 border-base-100">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <img src="/images/Logo_bg-r.png" className="h-auto w-40 lg:w-60" alt="Logo Firbuddy" />
        </div>
        <div className="navbar-end"></div>
      </div>
    </nav>
    // </header>
  );
}
