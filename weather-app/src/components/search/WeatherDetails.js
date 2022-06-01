import React from 'react'

function WeatherDetails(props) {
const sunsetDate = new Date(props.sunsetTime*100)
  return (
    <article className='widget'>
        <div className='weatherIcon'>
            <i className="wi wi-day-sunny"></i>
        </div>
        <div className='weatherInfo'>
            <div className='temperature'>
                <span>{props.temp}&deg;</span>
            </div>
            <div className='description'>
                <div className='weatherCondition'>
                    {props.weatherType}
                </div>
                <div className='place'>
                    {props.city}
                </div>
            </div>
        </div>
        <div className='date'>{new Date().toLocaleString()}</div>
        <div className='extra-temp'>
            <div className='temp-info-minmax'>
                <div className='two-sided-section'>
                    <p>
                        <i className={"wi wi-sunset"}></i>
                    </p>
                    <p className='extra-info-leftside'>
                        {sunsetDate.getHours()} : {sunsetDate.getMinutes()}<br></br>
                        Sunset
                    </p>
                </div>
            </div>
            <div className='temp-info-minmax'>
                <div className='two-sided-section'>
                    <p>
                        <i className={"wi wi-humidity"}></i>
                    </p>
                    <p className='extra-info-leftside'>
                        {props.humidity}<br></br>
                        humidity
                    </p>
                </div>
            </div>
            <div className='temp-info-minmax'>
                <div className='two-sided-section'>
                    <p>
                        <i className={"wi wi-rain"}></i>
                    </p>
                    <p className='extra-info-leftside'>
                        {props.pressure}<br></br>
                        Pressure
                    </p>
                </div>
            </div>
            <div className='temp-info-minmax'>
                <div className='two-sided-section'>
                    <p>
                        <i className={"wi wi-strong-wind"}></i>
                    </p>
                    <p className='extra-info-leftside'>
                        {props.windSpeed}<br></br>
                        Speed
                    </p>
                </div>
            </div>
        </div>
    </article>
  )
}

export default WeatherDetails