import React from 'react';


const Inc =(props)=>{
  console.log(props);
    return(
        <div className="blocktext">
            {props.city &&
            <div>
                <p>Местоположение: {props.city}, {props.country}</p>

            </div>
            }
            <p>{props.error}</p>

        </div>
    );
};

export default Inc;
