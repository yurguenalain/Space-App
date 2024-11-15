import "./apod.css"
// APOD.js
import React, { useState, useEffect } from "react";
import "./APOD.css";

function APOD() {
    const [photoData, setPhotoData] = useState(null);
    const API_KEY = "TU_CLAVE_API"; // Reemplaza con tu clave de API de NASA
    const API_URL = `https://api.nasa.gov/planetary/apod?api_key=TR4GHeIVyJLmUPWlotkQKIMDBdqhmNlgVxQqadm7`;

    useEffect(() => {
        const fetchPhoto = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setPhotoData(data);
            } catch (error) {
                console.error("Error fetching APOD data:", error);
            }
        };

        fetchPhoto();
    }, []);

    if (!photoData) return <p>Cargando...</p>;

    return (
        <div className="apod-container">
            <h2>{photoData.title}</h2>
            <p>{photoData.date}</p>
            {photoData.media_type === "image" ? (
                <img src={photoData.url} alt={photoData.title} className="apod-image" />
            ) : (
                <iframe
                    title="space-video"
                    src={photoData.url}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="apod-video"
                ></iframe>
            )}
            <p>{photoData.explanation}</p>
        </div>
    );
}

export default APOD;


