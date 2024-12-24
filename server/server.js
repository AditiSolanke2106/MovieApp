const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
const TMDB_API_KEY = process.env.TMDB_API_KEY;

app.get("/search", async (req, res) => {
  const { query, genre, rating, type } = req.query;

  try {
    // API URL setup with type and query parameters
    let apiUrl = `https://api.themoviedb.org/3/search/${type}?api_key=${TMDB_API_KEY}&query=${query}&page=1&language=en-US`;

    // Add additional filters (genre, rating)
    if (genre) {
      apiUrl += `&with_genres=${genre}`;
    }
    if (rating) {
      apiUrl += `&vote_average.gte=${rating}`;
    }

    // Making the GET request to TMDb API
    const response = await axios.get(apiUrl);
    
    // Return the response data from TMDb
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


