import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const MapContainer = () => {

  const mapStyles = {
    height: "80vh",
    width: "50%"
  };

  const defaultCenter = {
    lat: 40.0583, lng: -74.4057
  }

  return (
    <LoadScript
      googleMapsApiKey=''>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
    </LoadScript>
  )
}
export default MapContainer;
