import { useEffect, useState } from "react";
import Movie from "./Movie";
import styles from "./Slide.module.css";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
function Slide({api}) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [trans, setTrans] = useState(0);
  const onClickR = () => {
    if (trans<=-5280) {
      return;
    }
    setTrans(current => current - 1320);
  };
  const onClickL = () => {
    if (trans>=0) {
      return;
    }
    setTrans(current => current + 1320);
  };
  const getMovies = async() => {
    const response = await fetch(
      api
      );
      const json = await response.json();
      setMovies(json.data.movies);
      setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return(
    <div className={styles.slide__movies}>{loading? <h1>Loading</h1>:(
      <div className={styles.moive__box}>
        <div className={styles.moive__show}>
          <div className={styles.moive__lists} style={{transform: `translateX(${trans}px)`}}>
          {movies.map((movie)=> 
            <Movie 
              key={movie.id}
              id={movie.id}
              medium_cover_image={movie.medium_cover_image} 
              title={movie.title} 
              runtime={movie.runtime}
              year={movie.year}
              genres={movie.genres}
              />
          )}
          </div>
        </div>
        <div className={styles.arrow__button}>
          <button className={trans? styles.arrow__left:styles.hidden} onClick={onClickL}>
            <FontAwesomeIcon icon={faCircleChevronLeft} size="2x"/>
          </button>
          <button className={trans===-5280? styles.hidden:styles.arrow__right} onClick={onClickR}>
            <FontAwesomeIcon icon={faCircleChevronRight} size="2x"/>
          </button>
        </div>
      </div>
        
    )}</div>
  )
}
export default Slide;