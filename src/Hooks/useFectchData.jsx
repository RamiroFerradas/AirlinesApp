import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFectchData(url) {
  const [airlines, setAirline] = useState(null);
  const [airports, setAirports] = useState(null);
  const [flights, setFlights] = useState(null);
  const [city, setCity] = useState(null);
  const [airportByCity, setAirportByCity] = useState(null);
  try {
    const fetchAirports = async () => {
      const res = await axios(
        `http://192.168.0.160:3001/airports?city=${city}`
      );
      const json = await res.data;
      setAirportByCity(json);
    };

    const fetchData = async () => {
      url.map(async (e) => {
        const res = await axios(`http://192.168.0.160:3001/${e}`);
        const json = await res.data;
        e === "airlines" && setAirline(json);
        e === "flights" && setFlights(json);
        e === "airports" && setAirports(json);
      });
    };

    useEffect(() => {
      fetchData();
      if (city) {
        fetchAirports();
      }
    }, [city]);
  } catch (error) {
    console.log(error);
  }

  return {
    airlines,
    airports,
    flights,
    setCity,
    city,
    airportByCity,
    setAirportByCity,
  };
}
