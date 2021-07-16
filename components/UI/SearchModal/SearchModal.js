import { useStateContext } from "../../HBOProvider";
import { useEffect, useState } from 'react';
import axios from "axios";
import Link from 'next/link'
import {useRouter} from 'next/router'


const SearchModal = (props) => {
  const globalState = useStateContext();
  const router = useRouter()
  const [popData, setPopData] = useState([])
  const [searchData, setSearchData] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [text, setText] = useState('')

	useEffect(() => {
		if (globalState.searchOpen === true) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'auto';
		}
	}, [globalState.searchOpen])

	useEffect(async () => {
    try {
      let popData = await axios.get(`https://api.themoviedb.org/3/discover/movie?primary_release_year=2021&api_key=d0c1682a8a39232c2e4c32225165dc0d&language=en-US`)
      setPopData(popData.data.results.filter((item, i) => i < 14))
      setShowResults(false)
    } catch (error) {console.error(error)}
	}, [])

  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for(let index = 1; index <= digit; index++) {
      thumbnails.push(comp)
    }

    return thumbnails;
  }

  const handleInput = async (e) => {
    try {
      setText(e.target.value)
      let searchData = await axios.get(`https://api.themoviedb.org/3/search/multi?query=${e.target.value}&api_key=d0c1682a8a39232c2e4c32225165dc0d&language=en-US`)
      setSearchData(searchData.data.results.filter((item, i) => item.media_type === 'tv' || item.media_type === 'movie'))
      setShowResults(true)
      console.log(searchData)
    } catch (error) {console.error(error);}
  }

  const clickedPlay = (type, id, media_type) => {
    if (type === 'popular') {
			router.push(`/movie/${id}`);
      globalState.setSearchOpenAction(!globalState.searchOpen)
    }
    if (type === 'search') {
			router.push(`/${media_type}/${id}`);    }
      globalState.setSearchOpenAction(!globalState.searchOpen)
  }

  return(
    <div className={`search-modal ${globalState.searchOpen ? 'search-modal--active' : ''}`}>
      <div className="search-modal__input-group ">
        <input 
          className="search-modal__input" 
          type="text" placeholder="search for a title" 
          onChange={handleInput}
          value={text.value}
        />
        <div 
          className="search-modal__close-btn"
          onClick={() => {
            globalState.setSearchOpenAction(false)
          }}>
          <i className="fas fa-times" />
        </div>
      </div>

      <h3 className="search-modal__title">
      {showResults && searchData.length >= 1 ? `Search Results for ${text}` : 'Popular Searches'}
      </h3>
      
      <div className="search-modal__thumbnails">
        {showResults && searchData.length >= 1 ? <SearchResults clickedPlay={clickedPlay} searchData={searchData} /> : <PopularResults clickedPlay={clickedPlay} popData={popData} />}
      </div>
    </div>
  )
}

const PopularResults = (props) => {
  return (
    props.popData.map((item, index) => {
      return (
          <div 
            className="search-modal__thumbnail" 
            key={index} 
            onClick={() => props.clickedPlay('popular', item.id)}>
            <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} />
            <div className="search-modal__top-layer">
              <i className="fas fa-play"/>  
            </div>  
          </div>

      )
    })
  )
}

const SearchResults = (props) => { 
  return (
    props.searchData.map((item, index) => {
      return (
          <div 
            className="search-modal__thumbnail" 
            key={index}
            onClick={() => props.clickedPlay('search', item.id, item.media_type)}>
            
            <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} />
            <div className="search-modal__top-layer">
              <i className="fas fa-play"/>  
            </div>  
          </div>
      )
    })
  )

}

export default SearchModal;