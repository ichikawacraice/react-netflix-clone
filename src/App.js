import './App.css';
import { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista total
      const list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pegando o Featured
      const originals = list.filter((i) => i.slug === 'popular');
      const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      const chosen = originals[0].items.results[randomChosen];
      const chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 40) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />

      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="listas">
        {movieList.map((item) => (
          <MovieRow key={item.id} title={item.title} items={item.items} />
        ))}

      </section>

      <Footer />

      {movieList.length <= 0
      && (
      <div className="loading">
        <img src="/loading.gif" alt="loading icon" />
      </div>
      )}
    </div>
  );
}

export default App;
