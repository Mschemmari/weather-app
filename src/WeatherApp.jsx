import React from 'react';

export default class WeatherApp extends React.Component {

  constructor() {
    super(); // A call to the class we are extending: React.Component
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
}