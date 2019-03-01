import React from 'react';
import Weather from "./weather";

const Days =(props)=>{
  console.log(props.data);
if (props.data){
    return(
        props.data.map((day) =>
        <Weather
            date={day.date}
            temp={day.temp}
            city={day.city}
            country={day.country}
            pressure={day.pressure}
            wind={day.wind}
            error={day.error}
        />
      )
    );
  }
};

export default Days;
