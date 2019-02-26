import React from 'react';
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";
import Inc from "./components/infocity";

const API_KEY ="6a8b0458033025e329a9352a6b5dce2c";

class App extends React.Component{

  state = {
    data: [{
      date:undefined,
      temp:undefined,
      city:undefined,
      country:undefined,
      pressure:undefined,
      wind:undefined,
      error:undefined
    }]
  };

  gettingWeather = async (event) =>{
    event.preventDefault();
    const city = event.target.elements.city.value;

    if (city) {
      const api_url = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},country&appid=${API_KEY}&units=metric&cnt=40`);
      const data = await api_url.json();
      let stateData = [];

      for (let day of data.list) {
        stateData.push(
          {date:day.dt_txt,
            temp:day.main.temp,
            city:data.city.name,
            country:data.city.country,
            pressure:day.main.pressure,
            wind:day.wind.speed,
            error: undefined
          }
        );
      }

      console.log(stateData[0]);
      this.setState({data:stateData});
    }
  };


  render(){
    console.log(this.state);
    return(
        <div className="dives">
        <div className="infocity">
        <Info className="info"/>

                <Inc className="inc"
                city={this.state.data[0].city}
                country={this.state.data[0].country}
                />

                <Form className="form"
                weatherMethod={this.gettingWeather}/>

                <div className="firstdiv">
                  <div className="weather">
                      {this.state.data ? this.state.data.map(dayed =>
                        <Weather className="weather"
                        date={dayed.date}
                        temp={dayed.temp}
                        city={dayed.city}
                        pressure={dayed.pressure}
                        wind={dayed.wind}
                        error={dayed.error}


                      />) : "loading..."}

                  </div>

        </div>



            </div>


        </div>
    );
  }
}
export default App;
