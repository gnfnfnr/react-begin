import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import styles from './Detail.module.css';

function Detail() {
    const {id} = useParams();
    const [movie, setmMovie] = useState([]);
    const [thumb, setThumb] = useState(false);
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setmMovie(json.data.movie);
    };
    useEffect(()=>{
        getMovie();
    }, []);
    const repeatStar = () =>{
        const result = [];
        for (let index = 0; index < Math.round(movie.rating/2); index++) {
            result.push(<FontAwesomeIcon icon={faStar} key={index}/>);
        }
        return result;
    }
    const onClick = () =>{
        setThumb(!thumb);
    };
    return (
        <div className={styles.movie__box}>
            <img src={movie.background_image} className={styles.preview__bgImg}/>
            {movie.yt_trailer_code? 
            <iframe width="100%" height="595px" src= {`https://www.youtube.com/embed/${movie.yt_trailer_code}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            : <img src={movie.medium_cover_image}/>
            }
            <h1>{movie.title}</h1>
            <div className={styles.preview__good} style={{color:thumb? "rgb(255, 221, 99)":""}}>
                <FontAwesomeIcon icon={faThumbsUp} onClick={onClick} />
            </div>
            <div>
                <span>{movie.year? movie.year:""}</span>
                <span>{repeatStar()}</span>
                <span>{Math.round(movie.rating/2)+'/5'}</span>
            </div>
            <a href={movie.url} title="DOWNLOAD" target="_blank"><div className={styles.preview__download}>다운로드 하러가기</div></a>
            <div>
                 <p className={styles.preview__sum}>{String(movie.description_full).length > 428 ? `${movie.description_intro.slice(0, 428)}...` : movie.description_intro}</p>
            </div>
        </div>
    )
}

export default Detail;