const API_KEY = '537614ef4a0a389d2b07cf72a46e0355';
const API_BASE = 'https://api.themoviedb.org/3';
const LANG = 'language=pt-BR';
const KEY = `api_key=${API_KEY}`;
/*
- Originais netflix
- trending
- top rated
- ação
- comédia
- terror
- romance
- documentário
*/

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => [
    {
      id: '1',
      slug: 'popular',
      title: 'Populares',
      items: await basicFetch(`/discover/tv?with_network=213&${LANG}&${KEY}`),
    },
    {
      id: '2',
      slug: 'trending',
      title: 'Em alta',
      items: await basicFetch(`/trending/all/week?${LANG}&${KEY}`),
    },
    {
      id: '3',
      slug: 'toprated',
      title: 'Recomendados',
      items: await basicFetch(`/movie/top_rated?${LANG}&${KEY}`),
    },
    {
      id: '4',
      slug: 'action',
      title: 'Ação',
      items: await basicFetch(`/discover/movie?with_genres=28&${LANG}&${KEY}`),
    },
    {
      id: '5',
      slug: 'comedy',
      title: 'Comédia',
      items: await basicFetch(`/discover/movie?with_genres=35&${LANG}&${KEY}`),
    },
    {
      id: '6',
      slug: 'horror',
      title: 'Terror',
      items: await basicFetch(`/discover/movie?with_genres=27&${LANG}&${KEY}`),
    },
    {
      id: '7',
      slug: 'romance',
      title: 'Romance',
      items: await basicFetch(`/discover/movie?with_genres=10749&${LANG}&${KEY}`),
    },
    {
      id: '8',
      slug: 'documentary',
      title: 'Documentários',
      items: await basicFetch(`/discover/movie?with_genres=99&${LANG}&${KEY}`),
    },
  ],

  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case 'movie':
          info = await basicFetch(`/movie/${movieId}?${LANG}&${KEY}`);
          break;
        case 'tv':
          info = await basicFetch(`/tv/${movieId}?${LANG}&${KEY}`);
          break;
        default:
      }
    }

    return info;
  },
};
