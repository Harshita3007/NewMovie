import React, { useEffect, useState } from 'react';
import MovieListInDashboard from './MovieListInDashboard';
import Navbar from './Navbar';
function Dashboard() {

  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState("");

  const getMovieRequest = async (searchMovies) => {
    const url = "https://www.omdbapi.com/?s=" + searchMovies + "&apikey=bcc4762c";
   
    const response = await fetch(url);
    const responseJSON = await response.json();

    if (responseJSON.Search) {
      setMovies(responseJSON.Search);
    }

  }

  useEffect(
    () => {
      getMovieRequest(searchMovies);
    }, [searchMovies]
  );

  return (
    <div className='container-fluid'>
      <div className='row ' >
        <Navbar/>
      </div>
      <div className='rows'>
      <div className="mb-2" style={{textAlignVertical: "left",textAlign: "left",}}>
      <h3 className='text' >SEARCH FOR YOUR FAVOURITE MOVIE</h3>
        <form className="d-flex search-block" >
          <input placeholder="Search for a movie"className="search-bar form-control me-2 "  value={searchMovies}
            onChange={(event) => {
              setSearchMovies(event.target.value)
            }}
          />
        </form>
        </div>
      </div>
      <div style={{marginBottom : "20 px" }} className='rows' >
        <MovieListInDashboard movies={movies}/>
        {/* style={{textAlignVertical: "center",textAlign: "center",}} */}
      </div>
      
    </div>

  );
}


export default Dashboard
