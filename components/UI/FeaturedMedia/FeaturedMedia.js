import { useRouter } from "next/router"
import { useStateContext } from "../../HBOProvider";


const FeaturedMedia = (props) => {
  const router = useRouter();
  const globalState = useStateContext()

  const clickedPlay = () => {
    router.push(props.linkUrl)
  }
  
  const clickedAdd = (props) => {
    globalState.addToList({mediaId: props.mediaId, mediaType: props.mediaType, mediaUrl: props.mediaUrl})
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
    } else if (props.page !== 'mediaType') {
      return (
      <iframe 
        className="featured-media__movie"
        width="100%"
        height="100%"
        src={props.mediaUrl}
        allowFullScreen   
      />)
    } else if (props.page === 'mediaType') {
      return (
        <img src={props.mediaUrl} className="featured-media__img" />
      )
    }
  }

  return(
    <div className={`featured-media ${props.page === 'mediaType'? 'featured-media--media-type' : ''}`}>
      {showMedia()}
      <div className="featured-media__bg">
        <div className="featured-media__container">
          <div className="featured-media__title">{props.title}</div>
          <div className="featured-media__playing">NOW PLAYING</div>
          <div className="featured-media__location">In theaters and on HBO MAX.</div>

          <div className="featured-media__buttons">
            <div className="featured-media__play-btn" onClick={clickedPlay}>
              <i className="fas fa-play"/>
            </div>
            
            <div className="featured-media__add-btn" onClick={() => {
              clickedAdd(props)
            }}>
              <i className="fas fa-plus"/>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default FeaturedMedia;