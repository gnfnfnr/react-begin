import PropTypes from "prop-types";
import {
    Link
  } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import styles from "./Movie.module.css";

function Movie({id, title, summary, medium_cover_image, runtime,year ,genres}) {
    const [revert, setRevert] = useState(false);
    const onClick= () => setRevert(!revert);
    return (
        <div className={styles.movie__col} onClick={onClick}>
            {revert?
                <p>{summary.length > 235 ? `${summary.slice(0, 232)}...` : summary}</p>: 
                    <div> 
                        <h2>
                            <Link to={`/movie/${id}`}>
                            {title}
                            </Link>
                        </h2>
                        <div>
                            <span>{`상영시간: ${runtime}분`}</span>
                            <span>{`${year}년`}</span>
                        </div>
                        <ul className={styles.movie__genres}>
                          {genres.map((g)=><li key={g}>{g}</li>)}
                        </ul>
                        <img src={medium_cover_image}/>
                    </div>
            }
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