import './index.css';

function Header({ black }) {
  return (
    <header className={`header ${black ? 'black' : ''}`}>
      <div>
        <a href="/" className="header--logo">CLONEFLIX</a>
      </div>
      <div className="header--icons" />

    </header>
  );
}

export default Header;
