import React from "react";
import { movies } from "../data";

function Movies() {
  // console.log(movies)
  return (<div>{/*{code here}*/}
    <h1>Movies Page</h1>
    <div>{movies.map((item, index)=>(
      <div key={index}>
        <h3>Name: {item.title}</h3>
        <p>Time: {item.time}</p>
        Genres:{item.genres.map((item , index)=><li key={index}>{item}</li>)}
      </div>
    ))}
    
    </div>
    
  </div>);
}

export default Movies;
