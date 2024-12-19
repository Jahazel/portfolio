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
              <a href="/resume.pdf" target="_blank">
                Resume
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jahazel-sanchez-6b402a201/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/Jahazel" target="_blank">
                Github
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
