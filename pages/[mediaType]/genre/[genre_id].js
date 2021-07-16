import Head from 'next/head'
import { useEffect } from 'react';
import {useRouter} from 'next/router'
import LazyLoad from 'react-lazyload';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

// Components
import MainLayout from '../../../components/Layouts/MainLayout'
import GenreNav from '../../../components/UI/GenreNav/GenreNav';
import FeaturedMedia from '../../../components/UI/FeaturedMedia/FeaturedMedia'
import MediaRow from '../../../components/UI/MediaRow/MediaRow'
import AuthCheck from '../../../components/AuthCheck';
import { useStateContext } from '../../../components/HBOProvider'
import Placeholder from '../../../components/UI/Placeholder/Placeholder';
import { shuffleArray } from '../../../components/utilities';

export default function GenrePage(props) {
  const globalState = useStateContext();
  const router = useRouter()

  const showRandomMedia = () => {
    let thumbType;
    
    return props.miscData.map((item, index) => {
      thumbType = shuffleArray(globalState.thumbTypes)[0]
      return (
        <LazyLoad
          key={uuidv4()} 
          offset={-100} 
          placeholder={<Placeholder type={thumbType} title={item.name}/>}>
          <MediaRow 
              key={uuidv4()} 
              title={item.name}
              endpoint={`discover/${props.query.mediaType}?with_genres=${props.query.genre_id}&page=${index + 1}`} 
              type={thumbType} />
        </LazyLoad>

      )
    })
  }

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
				mediaUrl={`https://image.tmdb.org/t/p/original${props.featuredData.backdrop_path}`}
				title={props.query.mediaType === 'movie'? props.featuredData.title : props.featuredData.name}
				linkUrl={`/${props.query.mediaType}/${props.featuredData.id}`}
				// type="front"
        page="mediaType"
				mediaType={`${props.query.mediaType}`}
				mediaId={460465}
			/>
      <GenreNav mediaType={props.query.mediaType} genresData={props.genresData} />
      {showRandomMedia()}

    </MainLayout>
  )
}


export async function getServerSideProps(context) {
    let genresData
    let featuredData
    try {
      genresData = await axios.get(`https://api.themoviedb.org/3/genre/${context.query.mediaType}/list?api_key=d0c1682a8a39232c2e4c32225165dc0d&language=en-US`)
      featuredData = await axios.get(`https://api.themoviedb.org/3/discover/${context.query.mediaType}?with_genres=${context.query.genre_id}&primary_release_year=2021&&api_key=d0c1682a8a39232c2e4c32225165dc0d&language=en-US`)
    } catch(error) {
      console.error(error);
    }
    return {
        props: {
            genresData: genresData.data.genres,
            miscData: shuffleArray(featuredData.data.results),
            featuredData: shuffleArray(featuredData.data.results)[0],
            query: context.query,
        }
    }
}