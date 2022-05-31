import React,{useState} from 'react'
import './searchmain.css'
import WeatherDetails from './WeatherDetails'

function SearchMain() {

  const [cityName,setCityName] = useState('')
  const [] = useState('')

  const handleSearchClick = (e) =>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=680c7d7a6fb668232ceac51be84cb2c5`)
    .then(res => res.json())
    .then(result => console.log(result))
    .catch(err=> console.log(err))
  }

  const handleSearchInput = (e) =>{
      setCityName(e.target.value)
  }

  return (
    <>
    <div className='wrap'>
        <div className='search'>
            <input type="search" placeholder='city..' id="search" onChange={handleSearchInput}></input>
        </div>
        <button className='searchbutton' onClick={handleSearchClick}>
            Search    
        </button>
    </div>
    <WeatherDetails city={cityName}></WeatherDetails>
    </>
  )
}

export default SearchMain