import React from 'react';


const Weather =(props)=>{
    return(
        <div className="block-weather">
            <div>
                <p> {props.date}</p>
                <hr/>
                <p>Температура: {props.temp} °C</p>
                <p>Давление: {props.pressure} Бар</p>
                <p>Ветер: {props.wind} м/c</p>
            </div>

        </div>
    );
};

export default Weather;
