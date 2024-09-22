import "../scss/Header.scss";
import blueLogo from "../assets/blue-potchitos-logo.png";

function Header() {
  return (
    <header>
      <nav>
        <img src={blueLogo} alt="hotdog" />
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
        </ul>
        <div className="button-container">
          <ul>
            <li>
              <a href="/sign-in">Sign In</a>
            </li>
            <li>
              <a href="/sign-up">Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
