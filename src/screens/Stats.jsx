import React, { useState, useEffect } from "react";
const url = "https://api.usa.gov/crime/fbi/sapi/api/data/supplemental/burglary/agency/NJNPD0000/OFFENSE/2020/2021?API_KEY=1JcIb7T5VqWUGS9OjZLhc2ma0QdNLcuYhcdc97IF"

export default function Stats() {
    const [data, setData] = useState()

    const fetchData = async () => {
        const response = await fetch(url);
        const ApiData = await response.json();
        setTimeout(() => {
            setData(ApiData.results);
        }, 1000);
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log("main data", data)
    return (
        <div style={{ marginLeft: "20px", height: "80vh", background: "lightgrey", width: "50%", borderRadius: "20px" }}>
            <h2>Stats:</h2>
            {data?.map((item) => {
                return (
                    <div>
                        Some data: {item.actual_count}
                    </div>
                )
            })}
        </div>
    )
}