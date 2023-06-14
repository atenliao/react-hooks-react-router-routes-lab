import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    {/*{code here}*/}
    <h1>Actors Page</h1>
    {
    actors.map((actor,index) => {
      return <div key={index}>
        <h3>Name: {actor.name}</h3>
        Movies: {actor.movies.map((movie, index) => <li key={index}>{movie}</li>
        )}
        
      </div>
    })
    }
  </div>;
}

export default Actors;
