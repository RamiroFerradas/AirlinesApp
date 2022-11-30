import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFectchData(url) {
  const [airlines, setAirline] = useState(null);
  const [airports, setAirports] = useState(null);
  const [fligths, setFlights] = useState(null);

  try {
    const fetchData = async () => {
      url.map(async (e) => {
        const res = await axios(`http://192.168.0.160:3001/${e}`);
        const json = await res.data;
        if (e === "airlines") setAirline(json);
        if (e === "airports") setAirports(json);
        if (e === "flights") setFlights(json);
      });
    };

    useEffect(() => {
      fetchData();
    }, []);
  } catch (error) {
    console.log(error);
  }

  return { airlines, airports, fligths };
}
