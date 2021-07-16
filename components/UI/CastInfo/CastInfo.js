import axios from "axios";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";


const CastInfo = (props) => {
  const [loadingData, setLoadingData] = useState(true)
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/${props.mediaType === 'movie' ? 'movie' : 'tv'}/${props.mediaId}/credits?api_key=d0c1682a8a39232c2e4c32225165dc0d&language=en-US`)
    .then((res) => {
      setCredits(res.data);
      setLoadingData(false)
    })
    .catch((error) => {
      console.error(error);
    })
  }, [])

   const showCast = () => {
    if (loadingData === false) {
    return credits.cast.map((cast) => {
      return (
        <ul key={uuidv4()} className="cast-info__crew">
          <li>
            {cast.character}
          </li>
          <li>
            {cast.name}
          </li>
        </ul>
      )
    })}
  }

  const showCrew = () => {
    if (loadingData === false) {
    return credits.crew.map((crew) => {
      return (
        <ul className="cast-info__crew">
          <li>
            {crew.name}
          </li>
          <li>
            {crew.job}
          </li>
        </ul>
      )
    })}
  }


  return(
    <div className="cast-info">
      <div className="cast-info__group-title">
        Cast
      </div>
      <div className="cast-info__list">
        {showCast()}
      </div>
      <div className="cast-info__group-title">
        Crew
      </div>
      <div className="cast-info__list">
        {showCrew()}
      </div>
    </div>
  )
}

export default CastInfo;