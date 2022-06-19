import PropTypes from 'prop-types';

function Movie({ coverImg, title, year, runtime, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        {title} ({year})
      </h2>
      <span>{runtime} minutes</span>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genre: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;
