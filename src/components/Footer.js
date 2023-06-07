import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto py-3 bg-light">
      <div className="container text-center">
        <span className="text-muted">
          TV Shows App &copy; {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
