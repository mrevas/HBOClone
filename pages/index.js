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
      <MediaRow title="Movies" type="large-h" />
      <MediaRow title="Series" type="large-v" />
      <MediaRow title="Action" type="small-h" />
      <MediaRow title="Horror" type="small-v" />
      <MediaRow title="Sci-fi" type="small-h" />
    </MainLayout>
  )
}
