import React, { useState } from 'react';
import axios from 'axios';
import './Movies.css'
function Movies() {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [type, setType] = useState('movie');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:2000/search`, {
        params: { query, genre, rating, type }
      });
      setResults(response.data.results || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="Movies" >
      <div className='App'>
         {/* Search input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie or TV show"
      />

      {/* Genre dropdown */}
      <select onChange={(e) => setGenre(e.target.value)} value={genre}>
        <option value="">Select Genre</option>
        {/* Add your genres here */}
        <option value="28">Action</option>
        <option value="35">Comedy</option>
        <option value="18">Drama</option>
        {/* Add more genres as needed */}
      </select>

      {/* Rating input */}
      <input
        type="number"
        min="1"
        max="10"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Minimum rating"
      />

      {/* Type selection */}
      <select onChange={(e) => setType(e.target.value)} value={type}>
        <option value="movie">Movies</option>
        <option value="tv">TV Shows</option>
      </select>

      {/* Search Button */}
      <button onClick={handleSearch}>Search</button>
      </div>
      {/* Results */}
      <div className='Card'>
        {results.length === 0 ? (
          <p>No results found</p>
        ) : (
          <div className="results">
            {results.map((item) => (
              <div key={item.id} className="result-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title || item.name}
                  style={{ width: '200px', height: '300px' }}
                />
                <h3>{item.title || item.name}</h3>
                <p>{item.overview}</p>
                <p>{item.rating}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      
    </div>
  );
}

export default Movies;
