import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loader from "../utils/loader/Loader";
import { FaAngleLeft } from "react-icons/fa";
export default function AllList() {
  const [pokeData, setPockData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { pokName } = useParams();
  console.log("pokName", pokName);

  const pockFun = async () => {
    setLoading(true);
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokName}`);
    setPockData(res?.data);
    setLoading(false);
  };
  useEffect(() => {
    pockFun();
  }, []);

  if (loading) return <Loader />;
  return (
    <>
      <section className="bg-light pb-4 all-list-section">
        <div className="container text-center">
          <div className="row justify-content-center pt-5 pb-3 d-inline-block">
            <h1 className="text-start d-inline goBackButton">
              <Link to="/">
                <FaAngleLeft />
                Back
              </Link>
            </h1>
            <h1 className="text-center d-inline"> {pokName.toUpperCase()}</h1>
          </div>
        </div>
      </section>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center mb-4">
          {pokeData?.game_indices?.map((item, index) => (
            <div className="row mb-4" key={index}>
              <div className="col-md-2">
                <div className="card img-card-section h-100">
                  <img
                    className="card-img-top"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData?.id}.png`}
                    alt="Card image cap"
                  />
                </div>
              </div>
              <div className="col-md-10">
                <div className="row">
                  <h3>Version Name : {item?.version?.name}</h3>
                  <div className="col-md-12 mb-2">
                    <div className="card">
                      <div className="card-body">
                        <small className="card-text d-block">
                          Game Index : {item?.game_index}
                        </small>
                        <small className="card-text">
                          Version url : {item?.version?.url}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
