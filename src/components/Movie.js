import PropTypes from "prop-types";

function Movie({title, summary, medium_cover_image, genres}) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{summary}</p>
            <img src={medium_cover_image}/>
            <ul>
              {genres.map((g)=><li key={g}>{g}</li>)}
            </ul>
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    medium_cover_image: PropTypes.string.isRequired,
}
export default Movie;