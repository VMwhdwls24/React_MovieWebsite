import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const getDetails = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setDetails(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.movies}>
          <div className={styles.movie}>
            <img
              className={styles.d_img}
              src={details.medium_cover_image}
              alt={details.tittle}
            />
            <h2 className={styles.movie__title}>
              {details.title} ({details.year})
            </h2>
            <p className={styles.d_p}>{details.description_full}</p>
            <h3>Genre</h3>
            <ul className={styles.movie__genres}>
              {details.genres.map(g => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <div className={styles.runtime}>
              <strong>Runtime: </strong>
              {details.runtime} min
            </div>
            <div className={styles.rating}>
              <strong>Rating: </strong>
              {details.rating}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
