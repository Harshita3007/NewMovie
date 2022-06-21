import React, { useState } from "react";

import MovieListInFvt from "./MovieListInFvt";
import Navbar, { pvtMovies } from "./Navbar";

function PvtFavourites() {

    const [mov, setMov] = useState([...pvtMovies]);


    const DeleteFromPrivateFav = async (movie) => {
        const response = await fetch(
          "https://movieapplicationapi.herokuapp.com/list/DeleteFromPvtFavList",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({ _id: movie._id }),
          }
        );
        const newMovies = await response.json();
       
        setMov(newMovies)

    }
    return (
        <div>
            <Navbar />
            
            <h2 className='text'>PRIVATE LIST</h2>
            
            <div className="row fvt-row" >
                <MovieListInFvt movies={mov} handleFavClick={DeleteFromPrivateFav}/>
            </div>
      
        </div>


    );
}

export default PvtFavourites
