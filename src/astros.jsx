import "./Astros.css"
import { CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";

function AstroCard ({name , craft}){
    return (
        <div className="astro-card">
            <p className="astro-name">{name}</p>
            <p className="astro-craft">{craft}</p>
        </div>
    );
}

function Astros(){
    const API_URL = 'http://api.open-notify.org/astros.json';
    const [astros, setAstros] = useState(null);

useEffect (() =>{
     const fetchData = async() => {
        try{
        const data = await fetch(API_URL);
        const res = await data.json();
        setAstros(res.people);
                
     } catch (err){
        console.log(err);
     }

};
fetchData();
},[]);

return (
    <div className="astros-container">
       
        {!astros ?  (

            <CircularProgress/>
        ) : (
            astros.map((astro,id) => (
            <AstroCard key={id} {...astro}/>

        ))
    )}
        
    </div>
);

}

export default Astros;