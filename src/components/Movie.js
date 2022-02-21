import PropTypes from "prop-types";
import {
    Link
  } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import styles from "./Movie.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble  } from '@fortawesome/free-solid-svg-icons'

function Movie({id, title, summary, medium_cover_image, runtime,year ,genres}) {
    const [revert, setRevert] = useState(false);
    const onClick= () => setRevert(!revert);
    return (
        <div className={styles.movie__col}>
            <img src={medium_cover_image}/>
                <div className={styles.movie__info} onClick={onClick}> 
                    <div className={styles.movie__noncheck} style={{transform: revert? 'rotateY(180deg)': 'rotateY(0)'}}>
                        <h2 className={styles.movie__title}>
                            <Link to={`/movie/${id}`}>
                            {title.length> 20 ? `${title.slice(0, 20)}...`: title}
                            </Link>
                        </h2>
                            <span>{`상영시간: ${runtime}분`}</span>
                            <span>{`${year}년`}</span>
                        <ul className={styles.movie__genres}>
                        {genres.map((g)=><li key={g}>{g}</li>)}
                        </ul>
                    </div>
                    <div className={styles.movie__check}  style={{transform: revert? 'rotateY(0)':'rotateY(180deg)'}}>
                        <FontAwesomeIcon icon={faCheckDouble} size='2x'/><br/>
                        You've already seen the movie!
                    </div>
                        {/* <p className={styles.movie__sum}>{summary.length > 235 ? `${summary.slice(0, 232)}...` : summary}</p> */}
                </div>
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}
export default Movie;