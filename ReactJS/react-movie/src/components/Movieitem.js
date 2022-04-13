import React from 'react';

import './Movieitem.css';

// function Movieitem(){
// function Movieitem(item){
function Movieitem({item}){

    // https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
    const baseurl="https://image.tmdb.org/t/p/w500/";




    return(
        <div className="card col-lg-3 moviecard">

            {/* <h1>this from movie item</h1> */}
            {/* <h1>{item.name}</h1> */}

            <img src={`${baseurl}${item.poster_path}`} className="img-fluid" alt="img"/>
            <div className="card-body">
                <h3>rating:{item.vote_average}</h3>


            </div>
        </div>
    )
}

export default Movieitem