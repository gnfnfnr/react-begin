import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
function Detail() {
    const {id} = useParams();
    const [movie, setmMovie] = useState([]);
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setmMovie(json.data.movie);
    };
    useEffect(()=>{
       getMovie();
    }, []);
    return (
        <div>
            <img src={movie.large_cover_image}/>
            <h1>{movie.title}</h1>
            <div>
                <FontAwesomeIcon icon={faStar} />
                {'\*'.repeat(Math.round(movie.rating/2))}
                {Math.round(movie.rating/2)+'/5'}
            </div>
        </div>
    )
}

export default Detail;