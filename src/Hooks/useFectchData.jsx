import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFectchData(url) {
  const [airlines, setAirline] = useState([]);
  const [airports, setAirports] = useState([]);
  const [flights, setFlights] = useState([]);
  const [city, setCity] = useState(null);
  const [airportByCity, setAirportByCity] = useState([]);
  try {
    const fetchAirports = async () => {
      const res = (
        await axios(`http://192.168.0.160:3001/airports?city=${city}`)
      ).data;
      setAirportByCity(res);
    };

    var fetchData = async () => {
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
      if (city) fetchAirports();
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
    fetchData,
  };
}
