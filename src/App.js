import React, { useState, useCallback, useEffect } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  //Almacenamos como objeto la funcion para usarla como dependencia del useEffect e iniciarla al inicio tambien
  const fetchMovieHandler = useCallback(() => {
    setIsLoading(true);
    setError(null);
    fetch('https://swapi.dev/api/films/').then((response) => {
      //transform the response to a json
      if(!response.ok) {
        throw new Error('Ups, We found a mistake!')
      }

      return response.json();
    }).then((data) => {
      //once the response is transformed
      const moviesList = data.results.map(item => {
        return {
          id: item.episode_id,
          title: item.title,
          openingText: item.opening_crawl,
          releaseDate: item.release_date
        }
      });
      setMovies(moviesList)
      setIsLoading(false);
    }).catch((errordata) => {
      setError(errordata.message)
    }).finally(() => {
      setIsLoading(false);
    });
  });

  useEffect(() => {
    fetchMovieHandler();
  }, []);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {error && <p>{error}</p>}
        {!isLoading && movies.length > 0 && !error && <MoviesList movies={movies} />}
        {isLoading && <p>Loading..</p>}
        {!isLoading && movies.length === 0 && !error &&<p>No movies found</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
