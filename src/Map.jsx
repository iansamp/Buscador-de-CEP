import './Map.css';
import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

function map(){

    const containerStyle = {
        width: '400px',
        height: '300px'
      };

      const center = {
        lat: -20.7293322,
        lng: -48.891188
      };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
      })


    return(
        <div className='map'>
            <p className='obs'>OBS: O mapa ainda não puxa a localização certa.</p>
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                >
                </GoogleMap>
            ) : <></>}
        </div>
    )
}

export default map;