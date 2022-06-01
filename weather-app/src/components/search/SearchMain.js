import React,{useState} from 'react'
import './searchmain.css'
import WeatherDetails from './WeatherDetails'

function SearchMain() {

  const [cityName,setCityName] = useState('')
  const [temp,setTemp] = useState('')
  const [sunsetTime,setSunSetTime] = useState('')
  const [humidity,setHumidity] = useState('')
  const [pressure,setPressure] = useState('')
  const [windSpeed,setWindSpeed] = useState('')
  const [weatherType,setWeatherType] = useState('')

  const handleSearchClick = (e) =>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=680c7d7a6fb668232ceac51be84cb2c5`)
    .then(res => res.json())
    .then(result => {
      console.log(result)
      setTemp(result.main.temp)
      setSunSetTime(result.sys.sunset)
      setHumidity(result.main.humidity)
      setPressure(result.main.pressure)
      setWindSpeed(result.wind.speed)
      setWeatherType(result.weather[0].main)
    })
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
    <WeatherDetails 
      city={cityName}
      temp = {temp}
      sunsetTime={sunsetTime}
      humidity={humidity}
      pressure={pressure}
      windSpeed={windSpeed}
      weatherType={weatherType}
    ></WeatherDetails>
    </>
  )
}

export default SearchMain