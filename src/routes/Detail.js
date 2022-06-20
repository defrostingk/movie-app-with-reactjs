import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const getMovie = async (id) => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie(id);
  }, [id]);
  return (
    <div>
      <h1>
        <Link to='/'>Home</Link>
      </h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <MovieDetails
            key={id}
            coverImg={movie.large_cover_image}
            title={movie.title}
            year={movie.year}
            runtime={movie.runtime}
            rating={movie.rating}
            downloadCount={movie.download_count}
            downloadUrl={movie.url}
            description={movie.description_full}
            genres={movie.genres}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
