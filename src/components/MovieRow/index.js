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

  function infoColor(vote) {
    if (vote >= 8) {
      return 'movieRow--item-info-green';
    } if (vote >= 6) {
      return 'movieRow--item-info-yellow';
    } return 'movieRow--item-info-red';
  }

  function showDate(item) {
    if (item.first_air_date) {
      return (item.first_air_date).split('-', 1);
    } if (item.release_date) {
      return (item.release_date).split('-', 1);
    } return '';
  }

  function showName(item) {
    if (item.name) return item.name;
    if (item.title) return item.title;
    return '';
  }

  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="movieRow--listarea">

        <div className="movieRow--list" style={{ marginLeft: scrollX, width: listWidth }}>
          <div aria-hidden="true" className="movieRow--left" onClick={handleLeftArrow}><NavigateBeforeIcon style={{ fontSize: 50 }} /></div>
          <div aria-hidden="true" className="movieRow--right" onClick={handleRightArrow}><NavigateNextIcon style={{ fontSize: 50 }} /></div>
          {items.results.length > 0 && items.results.map((item) => (
            <div key={item.id} className="movieRow--item">
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
              <div className="movieRow--item-info">
                <div className="movieRow--item-info-name">{showName(item)}</div>
                <div className="movieRow--item-info-date">{showDate(item)}</div>
              </div>
              <div className={`movieRow--item-info-vote ${infoColor(item.vote_average)}`}>
                {item.vote_average}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieRow;
