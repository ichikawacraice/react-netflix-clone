import './index.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer--icons"> <a href="https://www.linkedin.com/in/gabriel-ichikawa-craice/" target="_blank" rel="noreferrer" aria-label="linked in"><LinkedInIcon /></a> <a href="https://github.com/ichikawacraice" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a></div>
      <div>Feito com <span role="img" aria-label="coração">❤️</span> por Gabriel Ichikawa Craice</div>
      <div className="footer--sub">Projeto de estudo e aprendizado em React</div>

    </footer>
  );
}

export default Footer;
