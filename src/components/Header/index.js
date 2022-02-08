import './index.css';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header({ black }) {
  return (
    <header className={`header ${black ? 'black' : ''}`}>
      <div>
        <a href="/" className="header--logo">CINEDATABASE</a>
      </div>
      <div className="header--iconArea">
        <SearchIcon className="header--iconArea-icon" />
        <NotificationsIcon className="header--iconArea-icon" />
        <PersonIcon className="header--iconArea-icon" />
      </div>

    </header>
  );
}

export default Header;
