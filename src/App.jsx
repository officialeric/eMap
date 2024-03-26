import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from "react";

const DEFAULT_LONGITUDE = 35.002;
const DEFAULT_LATITUDE = -6.392;

function App() {
  const [latitude,setlatitude] = useState(DEFAULT_LATITUDE);
  const [longitude,setlongigtude] = useState(DEFAULT_LONGITUDE);

  useEffect(() =>{
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords);
      // setlatitude(position.coords.latitude);
      // setlongigtude(position.coords.longitude);
    })
  },[])
  return (
    <>
     <MapContainer center={[latitude,longitude]} zoom={7}>
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      >

      </TileLayer>

      <Marker position={[latitude,longitude]} >
        <Popup>
          You are here
        </Popup>
      </Marker>
     
    </MapContainer>
    </>
  )
}



export default App;
