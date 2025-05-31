import { useEffect, useState } from "react";
import axios from "axios";


const useFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipCard = () => {
    setIsFlipped(isFlipped => !isFlipped);
  };

  return [isFlipped, flipCard];
  };

  export function useAxios(baseUrl, formatter = d => d) {
    const [data, setData] = useState([]);
  
    const addData = async (suffix = "") => {
      const res = await axios.get(`${baseUrl}${suffix}`);
      console.log("API payload →", res.data);           // <-- watch this
      setData(d => [...d, formatter(res.data)]);
    };
  
    return [data, addData];
  }



export default useFlip;