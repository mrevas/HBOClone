import Head from 'next/head'
import AuthCheck from '../../components/AuthCheck'
import MainLayout from '../../components/Layouts/MainLayout'
import CastInfo from '../../components/UI/CastInfo/CastInfo'
import FeaturedMedia from '../../components/UI/FeaturedMedia/FeaturedMedia'
import MediaRow from '../../components/UI/MediaRow/MediaRow'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'


export default function SingleMediaPage(props) {
    const router = useRouter()
    const [mediaData, setMediaData] = useState(false)

    useEffect(() => {
        axios.get(` https://api.themoviedb.org/3/movie/${props.query.id}?api_key=d0c1682a8a39232c2e4c32225165dc0d&language=en-US`)
        .then((res) => {
            setMediaData(res.data)
            console.log(res)
        })
        .catch((error) => {
          console.error(error);
        })
      }, [props.query.id])


  return AuthCheck(
    <MainLayout>
      <FeaturedMedia id={mediaData.id} title={mediaData.title} />
      <MediaRow title="More Like This" type="small-h" />
      <CastInfo />
    </MainLayout>
  )
}

export async function getServerSideProps(context) {
    return {
        props: {query: context.query}
    }
}

