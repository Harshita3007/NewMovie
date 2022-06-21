import React, { useEffect, useState } from "react";
import MovieListInFvt from "./MovieListInFvt";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

function PublicFavourites() {

    let userInfo = useParams();

    console.log(userInfo);

    let publicMovies = [];
    const [mov, setMov] = useState([]);


    useEffect(() => {(async () => {
        
        
        const url =
          "https://movieapplicationapi.herokuapp.com/list/FetchFromPublicFavList/" +
          userInfo.id;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        }
        );
        publicMovies = await response.json();
        setMov(publicMovies)
    }
    ) ();} , []);

    

    const DeleteFromPublicFav = async (movie) => {
        try {
            const response = await fetch(
              "https://movieapplicationapi.herokuapp.com/list/DeleteFromPublicFavList",
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
            
        } catch (error) {
       
        }


    }
    return (
        <div>
            <Navbar />
            <h2 className='text'>PUBLIC LIST</h2>
            
            <div className="row fvt-row" >
                <MovieListInFvt movies={mov} handleFavClick={DeleteFromPublicFav} />
            </div>

        </div>


    );
}

export default PublicFavourites
