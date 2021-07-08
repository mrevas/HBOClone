import Iframe from 'react-iframe'

const FeaturedMedia = (props) => {
  return(
    <div className="featured-media">
      <iframe 
        width="100%"
        height="100%"
        src={`https://www.2embed.ru/embed/tmdb/movie?id=${props.id}`}
        allow="accelerometer; autoplay; clipboard-write;encrypted-media; gyroscope; picture-in-picture"
        sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation"
        />
      <div className="featured-media__bg">
        <div className="featured-media__container">
          <div className="featured-media__title">{props.title}</div>
          <div className="featured-media__playing">NOW PLAYING</div>
          <div className="featured-media__location">In theaters and on HBO MAX. Streaming throughout May 23.</div>
          <div className="featured-media__buttons">
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