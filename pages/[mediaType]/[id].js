import Head from 'next/head'
import AuthCheck from '../../components/AuthCheck'
import MainLayout from '../../components/Layouts/MainLayout'
import CastInfo from '../../components/UI/CastInfo/CastInfo'
import FeaturedMedia from '../../components/UI/FeaturedMedia/FeaturedMedia'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LazyLoad from 'react-lazyload'
import Placeholder from '../../components/UI/Placeholder/Placeholder';
import axios from 'axios'
import MoreTitles from '../../components/UI/MediaRow/MoreTitles'


export default function SingleMediaPage(props) {
    const router = useRouter()
    const [mediaData, setMediaData] = useState(false)

    // useEffect(() => {
    //     axios.get(`https://api.themoviedb.org/3/movie/${props.query.id}?api_key=d0c1682a8a39232c2e4c32225165dc0d&language=en-US`)
    //     .then((res) => {
    //         setMediaData(res.data)
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     })
    //   }, [mediaData])


  return AuthCheck(
    <MainLayout>
      <FeaturedMedia 
        type="single" 
        title={props.query.mediaType === 'movie' ? props.mediaData.title : props.mediaData.name} 
        mediaUrl={`https://www.2embed.ru/embed/tmdb/${props.query.mediaType}?id=${props.mediaData.id}${props.query.mediaType === 'tv' ? '&s=1&e=1': ''}`}
        linkUrl="/movies/id"
      />
      <LazyLoad offset={-200} placeholder={<Placeholder type="large-v" title="Movies"/>}>
        <MoreTitles title="More Titles" endpoint={`${props.query.mediaType}/${props.query.id}/similar?`} type="small-v" />
      </LazyLoad>
      <CastInfo mediaId={props.query.id} mediaType={props.query.mediaType} />
    </MainLayout>
  )
}

export async function getServerSideProps(context) {
    let mediaData;
    try {
      mediaData = await axios.get(`https://api.themoviedb.org/3/${context.query.mediaType}/${context.query.id}?api_key=d0c1682a8a39232c2e4c32225165dc0d&language=en-US`)
    } catch(error) {
      console.error(error);
    }
    return {
        props: {mediaData: mediaData.data, query: context.query}
    }
}

