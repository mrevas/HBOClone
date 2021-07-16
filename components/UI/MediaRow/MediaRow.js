import { useState, useEffect } from "react";
import {shuffleArray} from "../../utilities"
import axios from "axios";
import Link from 'next/link'
import { v4 as uuidv4 } from "uuid";

const MediaRow = (props) => {
  const [loadingData, setLoadingData] = useState(true);
  const [movies, setMoviesData] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/${props.endpoint}&api_key=d0c1682a8a39232c2e4c32225165dc0d&language=en-US`)
    .then((res) => {
      setMoviesData(shuffleArray(res.data.results));
      setLoadingData(false);
    })
    .catch((error) => {
      console.error(error);
    })
  }, [props.query])

  const loopComp = (comp, digit) => {
    let thumbnails = [<Skeleton key={uuidv4()}  />,<Skeleton key={uuidv4()} />,<Skeleton key={uuidv4()} />,<Skeleton key={uuidv4()} />,<Skeleton key={uuidv4()} />];
    return thumbnails;
  }

  const showThumbnails = (type) => {
    return loadingData 
    ? loopComp((<Skeleton />), 10)
    : movies.map((movie) => {
      return <Thumbnail key={uuidv4()} movieData={movie} type={type} mediaType={props.mediaType} />
    });
  }

  return(
    <div className={`media-row ${props.type}`}>
      <h3 className="media-row__title">{props.title}</h3>
      <div className="media-row__thumbnails">
        {showThumbnails(props.type)}
      </div>
    </div>
  )
}

const Thumbnail = (props) => {
  const thumbSize = (type) => {

    if (type === 'large-v') {
      return '400';
    }
    if (type === 'small-v') {
      return '185'
    }
    if (type === 'large-h') {
      return '500';
    }
    if (type === 'small-h') {
      return '342';
    }
  }
  return (
    <Link href={`/${props.mediaType === 'tv' ? 'tv' : 'movie'}/${props.movieData.id}`}>
      <div className="media-row__thumbnail">
        <img src={`https://image.tmdb.org/t/p/original${props.movieData.poster_path}`} />
        <div className="media-row__top-layer">
          <i className="fas fa-play"/>  
        </div>  
      </div>   
    </Link>
  )
}
const Skeleton = () => {
  return (  
    <div className="media-row__thumbnail-skeleton">
      <div className="media-row__thumbnail-skeleton-img"></div>
    </div>   
  )
}

export default MediaRow;