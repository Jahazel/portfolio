const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#home" className="navbar-logo">
            JS
          </a>
          <ul className="navbar-links">
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
