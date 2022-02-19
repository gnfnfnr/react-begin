import { useEffect, useState } from "react";
import Movie from "./Movie";
import styles from "./Slide.module.css";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
function Slide({genre}) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  // const [trans, setTrans]
  const getMovies = async() => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&genre=${genre}`
      );
      const json = await response.json();
      setMovies(json.data.movies)
      setLoading(false)
  };
  useEffect(() => {
    getMovies();
  }, []);
  return(
    <div className={styles.movies}>{loading? <h1>Loading</h1>:(
      <div>
        <div className={styles.moive__show}>
          <div className={styles.moive__lists}>
          {movies.map((movie)=> 
            <Movie 
              key={movie.id}
              id={movie.id}
              medium_cover_image={movie.medium_cover_image} 
              title={movie.title} 
              summary={movie.summary}
              runtime={movie.runtime}
              year={movie.year}
              genres={movie.genres}
              />
          )}
          </div>
        </div>
        <div className="arrow-button">
          <div className="arrow-left">
            <FontAwesomeIcon icon={faCircleChevronLeft} size="2x"/>
          </div>
          <div className="arrow-right">
            <FontAwesomeIcon icon={faCircleChevronRight} size="2x"/>
          </div>
        </div>
      </div>
        
    )}</div>
  )
}
export default Slide;