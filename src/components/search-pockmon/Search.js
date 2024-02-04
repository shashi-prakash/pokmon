import React, { useState } from "react";
import axios from "axios";
import { FcSearch } from "react-icons/fc";
import { FcExternal } from "react-icons/fc";
export default function Search() {
  // hooks for get search input fields value
  const [searchPockmon, setSearchPockmon] = useState("");

  // hooks used to show results
  const [pockmoneCoosen, setPockmoneCoosen] = useState(false);

  const [dataNotFound, setDataNotFound] = useState(false);

  const [pockmon, setPockmon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defence: "",
    type: "",
  });

  const searchData = async () => {
    if (searchPockmon == "" || searchPockmon == undefined) {
      alert("Search bar field can't be empty");
    } else {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${searchPockmon}`
        );
        // console.log("search response", response);
        setDataNotFound(false);
        setPockmon({
          name: searchPockmon,
          species: response.data.species.name,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defence: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
        });
        setPockmoneCoosen(true);
      } catch (error) {
        setDataNotFound(true);
        console.log("Data not found", error)
      }
    }
  };

  return (
    <>
      <section className="bg-light pb-4">
        <div className="container">
          <div className="row justify-content-center pt-5 pb-3">
            <h1 className="text-center">Pockmon Stats</h1>
            <div className="row col-md-8 text-center">
                <div className="btn-group">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setSearchPockmon(e.target.value)}
                  />

                  <button
                    className="btn btn-outline-success"
                    onClick={searchData}
                  >
                    <FcSearch />
                  </button>
                </div>
            </div>
            {!pockmoneCoosen ? (
              <div className="text-center mt-3">
                {dataNotFound == true ? (
                  <small className="text-danger">
                    Data not found please insert a valid data
                  </small>
                )
                  :
                  <small> To search pockmone insert text <FcExternal /></small>
                }

              </div>
            ) : (

                <div className="container mt-5">
                  <div className="row d-flex justify-content-center mb-4">
                    <div className="col-md-2">
                      <div className="card h-100">
                        <img
                          className="card-img-top img-fluid"
                          src={pockmon.img}
                          alt="{pockmon.name}"
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <h3>{pockmon.name}</h3>
                        <div className="col-md-12 mb-2">
                          <div className="card">
                            <div className="card-body">
                              <p className="card-text">{pockmon.defence}</p>
                              <p className="card-text">{pockmon.species}</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="card">
                            <div className="card-body">
                              <p className="card-text">T{pockmon.type}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
            )}
          </div>
        </div>
      </section>
    </>
  );
}
