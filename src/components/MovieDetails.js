import PropTypes from 'prop-types';

function MovieDetails({
  coverImg,
  title,
  year,
  runtime,
  rating,
  downloadCount,
  downloadUrl,
  description,
  genres,
}) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        {title} ({year})
      </h2>
      <h3>
        <a href={downloadUrl} target='_blank' rel='noreferrer'>
          Download
        </a>
      </h3>
      <span>
        {runtime} minutes / ⭐{rating} / {downloadCount} downloads
      </span>
      <p>{description}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

MovieDetails.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  downloadCount: PropTypes.number.isRequired,
  downloadUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genre: PropTypes.arrayOf(PropTypes.string),
};

export default MovieDetails;
