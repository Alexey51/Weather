import React from 'react';
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";
import Inc from "./components/infocity";

const API_KEY ="6a8b0458033025e329a9352a6b5dce2c";

class App extends React.Component{

  state = {
    data: [],
    country: {}
  };

  gettingWeather = async (event) =>{
    event.preventDefault();
    const city = event.target.elements.city.value;
    let country = {country: null, city: null};
    if (city) {
      try {
      const api_url = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},country&appid=${API_KEY}&units=metric&cnt=40`);
      const data = await api_url.json();
      console.log(data);
      let stateData = [];

      for (let day of data.list) {
        if (country.country === null) {
          country.country = data.city.country;
          country.city = data.city.name;
        }
        stateData.push(
          <Weather className="weather"
          date={day.dt_txt}
          temp={day.main.temp}
          pressure={day.main.pressure}
          wind={day.wind.speed}
          error={undefined}
        />
        );
      }

      this.setState({data:stateData, country: country});
    } catch (error) {
      this.setState({data:[], country: country});
    }
    }
  };


  render(){
    console.log(this.state);
    return(
        <div className="dives">
          <div className="infocity">
            <Info className="info"/>
            <Inc className="inc"
              city={this.state.country.city}
              country={this.state.country.country}
            />

            <Form className="form"
              weatherMethod={this.gettingWeather}/>

            <div className="firstdiv">
              <div className="weather">
                {this.state.data ? this.state.data : "loading..."}
              </div>
            </div>
          </div>
            <div className="footer">Copyright © 2019 Alexey Kubyshkyn UA.</div>
        </div>
    );
  }
}
export default App;
