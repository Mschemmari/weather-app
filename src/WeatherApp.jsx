import React from 'react';
import { getLocationCoords, getWeatherData } from 'api';

export default class WeatherApp extends React.Component {

  constructor() {
    super();
    this.state = {
      city: 'Loading...',
      country: 'Loading...',
      currentWeather: 'Loading...',
      currentTemperature: 0,
      currentUnit: 'C',
      availableUnit: 'F'
    }
  }

  render() {
    return (
      <div className="main-wrapper overlay">
        <div className="forecast-box">
          <h1 className="city-name">{this.state.city}</h1>
          <h2 className="country">{this.state.country}</h2>
          <h3 className="temperature">{this.state.currentTemperature} &#176;{this.state.currentUnit} <span className="super-small">/ {this.state.availableUnit}</span></h3>
          <h2>{this.state.currentWeather}</h2>
        </div>
      </div>
    );
  }

  fetchWeather(units) {
  	getLocationCoords().then(
  		(coords) => {
  			getWeatherData(units, coords).then(
  				(getWeatherData) => {
  					this.setState({
  						city: getWeatherData.body.name,
  						country: getWeatherData.body.sys.country,
  						currentTemperature: getWeatherData.body.main.temp,
  						currentWeather: getWeatherData.body.weather[0].main,
  						currentUnit: units,
  						availableUnit: units === 'C' ? 'F' : 'C'
  					});
  				}, (error) => {
  					console.error(error);
  				}
  			);
  		}, (error) => {
  			console.error(error);
  			}
  		);
  	}
  }
