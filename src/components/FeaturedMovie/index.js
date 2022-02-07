import './index.css';

function FeaturedMovie({ item }) {
  const firstDate = new Date(item.first_air_date);

  return (
    <section className="featured" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})` }}>
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average} pontos</div>
            <div className="featured--year">{firstDate.getFullYear()} </div>
            <div className="featured--seasons">{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 && 's'} </div>
          </div>

          <div className="featured--description">{item.overview} </div>
          <div className="featured--buttons">
            <a href={`/watch/${item.id}`} className="featured--btn featured--btn-watch"> ▶ Assistir</a>
            <a href={`/list/add/${item.id}`} className="featured--btn featured--btn-mylist"> ✚ Minha Lista</a>
          </div>
          <div className="featured--genres"><strong>Gêneros:</strong> {item.genres.map((genreItems) => (<span key={genreItems.id} className="featured--genres-items">{genreItems.name}</span>))}  </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturedMovie;
