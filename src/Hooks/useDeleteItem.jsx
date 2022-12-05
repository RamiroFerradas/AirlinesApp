import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useDeleteItem(section, argument, dependecies) {
  const [render, setRender] = useState([]);

  const deleteFunction = async (id) => {
    (await axios.delete(`http://192.168.0.160:3001/${section}/${id}`)).data;
    setRender(render?.filter((e) => e.id !== id));
  };

  useEffect(() => {
    setRender(argument);

    // fetchData();
  }, []);

  return { render, setRender, deleteFunction };
}
