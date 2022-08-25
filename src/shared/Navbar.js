import React from 'react';
import './shared.css';
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
  return (
    <div className="App">
      <nav className="navbar --navbar">
        <span className="navbar-brand mx-4">
          <h3 className="navbar--label">Empresa</h3>
        </span>
      </nav>
    </div>
  );
};

export { Navbar };
