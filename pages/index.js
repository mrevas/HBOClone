import Head from 'next/head'
import { useEffect } from 'react';
import {useRouter} from 'next/router'
import LazyLoad from 'react-lazyload';

// Components
import MainLayout from '../components/Layouts/MainLayout'
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia'
import MediaRow from '../components/UI/MediaRow/MediaRow'
import AuthCheck from '../components/AuthCheck';
import { useStateContext } from '../components/HBOProvider'
import Placeholder from '../components/UI/Placeholder/Placeholder';

export default function Home() {
  const globalState = useStateContext();
  const router = useRouter()

  useEffect( () => {}, []);
  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
				mediaUrl="https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&loop=1&start=16&loop=1&mute=1&playlist=NYH2sLid0Zc&"
				title="Mortal Kombat"
				location="In theaters and on HBO MAX. Streaming throughout May 23."
				linkUrl="/movie/460465"
				type="front"
				mediaType={'movie'}
				mediaId={460465}
			/>
      <LazyLoad offset={-200} placeholder={<Placeholder type="large-v" title="Movies"/>}>
        <MediaRow title="Movies" endpoint="discover/movie?" type="large-v" />
      </LazyLoad>

      <LazyLoad offset={-200} placeholder={<Placeholder type="large-v" title="TV Shows"/>}>
        <MediaRow title="TV Shows" mediaType="tv" endpoint="discover/tv?" type="large-v" />
      </LazyLoad>

      <LazyLoad offset={-200} placeholder={<Placeholder type="small-v" title="Action"/>}>
        <MediaRow title="Action" endpoint="discover/movie?with_genres=28" type="small-v" />
      </LazyLoad>

      <LazyLoad offset={-200} placeholder={<Placeholder type="small-v" title="Horror"/>}>
        <MediaRow title="Horror" endpoint="discover/movie?with_genres=27" type="small-v" />
      </LazyLoad>

      <LazyLoad offset={-200} placeholder={<Placeholder type="small-v" title="Sci-fi"/>}>
        <MediaRow title="Sci-fi" endpoint="discover/movie?with_genres=878" type="small-v" />
      </LazyLoad>

      <LazyLoad offset={-200} placeholder={<Placeholder type="small-v" title="Mystery"/>}>
        <MediaRow title="Mystery" endpoint="discover/movie?with_genres=9648" type="small-v" />
      </LazyLoad>

      <LazyLoad offset={-200} placeholder={<Placeholder type="small-v" title="Thriller"/>}>
        <MediaRow title="Thriller" endpoint="discover/movie?with_genres=53" type="small-v" />
      </LazyLoad>

      <LazyLoad offset={-200} placeholder={<Placeholder type="small-v" title="Western"/>}>
        <MediaRow title="Western" endpoint="discover/movie?with_genres=37" type="small-v" />
      </LazyLoad>

      <LazyLoad offset={-200} placeholder={<Placeholder type="small-v" title="Comedy"/>}>
        <MediaRow title="Comedy" endpoint="discover/movie?with_genres=35" type="small-v" />
      </LazyLoad>

      <LazyLoad offset={-200} placeholder={<Placeholder type="small-v" title="Family"/>}>
        <MediaRow title="Family" endpoint="discover/movie?with_genres=10751" type="small-v" />
      </LazyLoad>

      <LazyLoad offset={-200} placeholder={<Placeholder type="small-v" title="History"/>}>
        <MediaRow title="History" endpoint="discover/movie?with_genres=36" type="small-v" />
      </LazyLoad>

    </MainLayout>
  )
}
