import  React, { useEffect, useState } from "react";
import axios from 'axios';

function BieresPhares() {
  const [beerList, setBeerList] = useState([])
  useEffect(() => {
    axios.get("https://api.punkapi.com/v2/beers?per_page=80")
    .then(response => {
      setBeerList(response.data)
    })
  }, [])
  return (
    <ul className="card">
      {beerList.map(item => (
        <li key={item.id}>
          <article className="bieres-article">
            <img src={item.image_url} className="bieres-img"></img>
            <div className="text-wrapper">
              <h1>{item.name}</h1>
              <p>{item.description}</p>
            </div>
          </article>
        </li>
      ))
      }
    </ul>
  )
}
export default BieresPhares