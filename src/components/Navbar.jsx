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
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#linkedin">LinkedIn</a>
            </li>
            <li>
              <a href="#github">Github</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
