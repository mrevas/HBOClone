import Head from 'next/head'
import { useEffect } from 'react';
import {useRouter} from 'next/router'

// Components
import MainLayout from '../components/Layouts/MainLayout'
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia'
import MediaRow from '../components/UI/MediaRow/MediaRow'
import AuthCheck from '../components/AuthCheck';
import { useStateContext } from '../components/HBOProvider'

export default function Home() {
  const globalState = useStateContext();
  const router = useRouter()

  useEffect( () => {}, []);
  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <MediaRow title="Movies" endpoint="discover/movie?primary_release_year=2021" type="large-v" />
      <MediaRow title="TV Shows" endpoint="discover/tv?" type="small-v" />
      <MediaRow title="Action" endpoint="discover/movie?with_genres=28" type="small-v" />
      <MediaRow title="Horror" endpoint="discover/movie?with_genres=27" type="small-v" />
      <MediaRow title="Sci-fi" endpoint="discover/movie?with_genres=878" type="small-v" />
      <MediaRow title="Mystery" endpoint="discover/movie?with_genres=9648" type="small-v" />
      <MediaRow title="Thriller" endpoint="discover/movie?with_genres=53" type="small-v" />
      <MediaRow title="Western" endpoint="discover/movie?with_genres=37" type="small-v" />
      <MediaRow title="Comedy" endpoint="discover/movie?with_genres=35" type="small-v" />
      <MediaRow title="Family" endpoint="discover/movie?with_genres=10751" type="small-v" />
    </MainLayout>
  )
}
