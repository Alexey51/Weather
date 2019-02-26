import React from 'react';


const Weather =(props)=>{
    return(
        <div className="block-weather">
            {props.city &&
            <div>
                <p> {props.date}</p>
                <hr/>
                <p>Температура: {props.temp} °C</p>
                <p>Давление: {props.pressure} Бар</p>
                <p>Ветер: {props.wind} м/c</p>
            </div>
            }
            <p>{props.error}</p>

        </div>
    );
};

export default Weather;
