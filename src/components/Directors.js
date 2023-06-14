import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    {/*{code here}*/}
    <h1>Directors Page</h1>
    <div>
      {
      directors.map((item, index)=>{
        return  (<div key={index}>
        <h3>Name: {item.name}</h3>
        Movies: {item.movies.map((item, index)=><li key={index}>{item}</li>)}
        </div>)
        })
      }
    </div>
  </div>;
}

export default Directors;
