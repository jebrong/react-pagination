import axios from "axios";
import { useEffect, useState } from "react";
import { createPages } from "./utils";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

export const useFetch = (pageNumber) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayedData, setDisplayedData] = useState([]);
  const getData = async () => {
    const res = await axios(url);
    setData(res.data);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    setDisplayedData(createPages(data, pageNumber));
  }, [data, pageNumber]);

  return { data, displayedData, loading };
};

export default useFetch;
