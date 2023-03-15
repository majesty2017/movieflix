import { useEffect, useState } from 'react'
import { BannerImg } from '../../images'
import './Banner.css'

import axios from '../../axios'
import requests from '../../Requests'

const Banner = () => {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }

    const [movie, setMovie] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        const request = await axios.get(requests.fetchNeflixOriginals)
        setMovie(
          request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
        )
        return request
      }
      fetchData()
    }, [])

  return (
    <header className='banner' style={{
      backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      objectFit: 'contain'
    }}>
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__btn_group">
          <button className='banner__btn'>Play</button>
          <button className='banner__btn'>My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner__fadeButton" />
    </header>
  )
}

export default Banner