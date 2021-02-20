import React from "react";
import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Weather from './Components/Weather';



class App extends React.Component {

  constructor(props) {
    super(props); // родителский констркутор с передайчей свойст дочернего проекта ООП.
    this.getWeather = this.getWeather.bind(this); // bind - привяска к указателю.
  }

  state ={
    icon: undefined,
    country: undefined,
    city: undefined,
    localtime: undefined,
    timezone: undefined,
    temperature:undefined,
    visibility:undefined,
    wind_direction: undefined,
    wind_speed: undefined
  };

  async getWeather (event) {
      event.preventDefault();
      const api_key = "8d3690c9f8f64bda944172805210502"
      const api_city = event.target.elements.city.value;
      if(api_city.trim() === ""){  // trim - уберает пробелы перед и после какого либо текста
        alert("Вы не указали название города");
      } else {
        const api_data = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${api_city}`
          ); 
          if(api_data.status === 400){
            alert("Города с таким названием не существует!");
          }else {
            const api_json = await api_data.json();
            console.log(api_json);
            this.setState({
              icon: api_json.current.condition.icon,
              country: api_json.location.country,
              city: api_json.location.name,
              localtime: api_json.location.localtime,
              timezone:api_json.current.tz_id,
              temperature: api_json.current.temp_c,
              visibility:api_json.current.vis_km,
              wind_direction:api_json.current.wind_dir,
              wind_speed: api_json.current.wind_kph
            })
          }
      }
  }


  render() {
    return (
      <div className="App">
        <Header/>
        <Main getWeatherMethod={this.getWeather}/>
        <Weather
          icon = {this.state.icon}
          country = {this.state.country}
          city = {this.state.city}
          localtime = {this.state.city}
          timezone = {this.state.timezone}
          temperature = {this.state.temperature}
          visibility = {this.state.visibility}
          wind_direction = {this.state.wind_direction}
          wind_speed = {this.state.wind_speed}
        />
        <Footer/>
      </div>
    );
  }
}

export default App;

