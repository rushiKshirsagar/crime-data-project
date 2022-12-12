import React from "react";
import Header from "./Header";
import MapContainer from "./MapContainer";
import Stats from "./Stats";

export default function MainContainer() {
    return (
        <div style={{ background: "grey", color: 'white', height: "100vh" }}>
            <Header />
            <div style={{ display: 'flex' }}>
                <MapContainer />
                <Stats />
            </div>
        </div>
    )
}