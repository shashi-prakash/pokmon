import React, { useEffect, useState } from "react";
import axios from "axios";
import { SlReload } from "react-icons/sl";
import Card from "./Card";
import Search from "../search-pockmon/Search";
import Loader from "../utils/loader/Loader";
export default function CardListItem() {
  const [pokeData, setPockData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/`);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevtUrl] = useState();

  const pockFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevtUrl(res.data.previous);
    getPockmon(res.data.results);
    setLoading(false);
  };
  const getPockmon = async (res) => {
    res?.map(async (item) => {
      const result = await axios.get(item.url);
      setPockData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };
  useEffect(() => {
    pockFun();
  }, [url]);

  if (loading) return <Loader/>;

  return (
    <>
      <Search />
      <div className="container mt-5">
        <h1 className="text-center mt-4 mb-5">Pockmon List Data</h1>
        <Card pockmon={pokeData} loading={loading} />
          <div className="prev-nextButton-container btn-group mt-2 pb-5">
            <div className="prev-nextButton gap-5">
            {prevUrl && (
              <button
                className="btn btn-primary mr-5"
                onClick={() => {
                  setPockData([]);
                  setUrl(prevUrl);
                }}
              >
                Back <SlReload />
              </button>
            )} &nbsp;

            <button
              className="btn btn-primary pl-4"
              onClick={() => {
                setPockData([]);
                setUrl(nextUrl);
              }}
            >
              Load more <SlReload />
            </button>
            </div>
          </div>
        </div>
    </>
  );
}
