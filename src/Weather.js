import React from "react";
import axios from "axios";


export default function Weather (props) {
     function handleSResponse(response) {
    alert(`The weather in ${props.city} is ${response.data.main.temp} C`)
    }
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSResponse);
    
}