import { FaGithub } from "react-icons/fa";

function Header() {
  return (
    <header className="header default-size">
      <nav className="header__nav">
        <a href="https://restcountries.com/">Rest Countries</a>
        <a
          href="https://github.com/BryanGrandon/Countries"
          className="header__nav-github"
        >
          <FaGithub /> Github
        </a>
      </nav>
      <h1 className="header__title">Countries</h1>
      <img
        className="header__img"
        src="https://www.rae.es/sites/default/files/2023-05/mapamundo.png"
        alt="countries-map"
      />
    </header>
  );
}

export default Header;
