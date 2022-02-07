import './index.css';
import { useState } from 'react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function MovieRow({ title, items }) {
  const listWidth = items.results.length * 200;
  const [scrollX, setScrollX] = useState(0);

  function handleLeftArrow() {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  function handleRightArrow() {
    let x = scrollX - Math.round(window.innerWidth / 2);
    if ((window.innerWidth - listWidth) > x) {
      x = (window.innerWidth - listWidth) - 60;
    }
    setScrollX(x);
  }

  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div aria-hidden="true" className="movieRow--left" onClick={handleLeftArrow}><NavigateBeforeIcon style={{ fontSize: 50 }} /></div>
      <div aria-hidden="true" className="movieRow--right" onClick={handleRightArrow}><NavigateNextIcon style={{ fontSize: 50 }} /></div>

      <div className="movieRow--listarea">
        <div className="movieRow--list" style={{ marginLeft: scrollX, width: listWidth }}>
          {items.results.length > 0 && items.results.map((item) => (
            <div key={item.id} className="movieRow--item">
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieRow;
