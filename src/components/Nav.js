const Nav = ({ links }) => {
  return (
    <nav>
      <li className="logo">JS.</li>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={link.link}
              key={link.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={link.logo} alt="Logo" className="img-class" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Nav;