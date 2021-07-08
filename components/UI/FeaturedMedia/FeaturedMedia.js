import { useRouter } from "next/router"


const FeaturedMedia = (props) => {
  const router = useRouter();
  const clickedPlay = () => {
    router.push(props.linkUrl)
  }

  const showMedia = () => {
    if (props.type === 'front') {
      return (
      <iframe 
        className="featured-media__video"
        width="100%"
        height="100%"
        src={props.mediaUrl}
        allow="accelerometer; autoplay; clipboard-write;encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen   
      />)
    } else {
      return (
      <iframe 
        className="featured-media__movie"
        width="100%"
        height="100%"
        src={props.mediaUrl}
        sandbox="allow-scripts allow-same-origin"
        allowFullScreen   
      />)
    }
  }

  return(
    <div className="featured-media">
      {showMedia()}
      <div className="featured-media__bg">
        <div className="featured-media__container">
          <div className="featured-media__title">{props.title}</div>
          <div className="featured-media__playing">NOW PLAYING</div>
          <div className="featured-media__location">In theaters and on HBO MAX.</div>
          <div className="featured-media__buttons" onClick={() => clickedPlay()}>
            <div className="featured-media__play-btn">
              <i className="fas fa-play"/>
            </div>
            <div className="featured-media__info-btn">MORE INFO</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedMedia;