import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
    const position = [40.7831, -73.9712];

    return (
        <div className="mb-4" style={{ height: "400px", width: "100%" }}>
            <MapContainer  center={position} zoom={13} scrollWheelZoom={false} style={{ height: "100%", width: "100%"}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                    Manhattan <br /> New York, NY, USA.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;

