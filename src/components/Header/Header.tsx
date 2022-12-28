import TeluricaLogo from 'assets/img/telurica-logo.jpg';
import "./Header.scss";

export default function Header() {
  return (
    <header className="header-container">
      <img id="header-logo" src={TeluricaLogo} alt="Telurica Logo" />
      <nav className="header-nav">
        <a className="header-nav-item" href="/">Camisas</a>
        <a className="header-nav-item" href="/">Carteiras</a>
        <a className="header-nav-item" href="/">Sobre</a>
      </nav>
    </header>
  );
}
