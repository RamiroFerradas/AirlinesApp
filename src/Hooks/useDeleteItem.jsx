import React from "react";
import axios from "axios";

export default function useDeleteItem(id) {
  const deleteFunction = async () => {
    await axios.delete(`http://192.168.0.160:3001/${id}`);
  };

  return <div>useDeleteItem</div>;
}
