import React from "react";
import { useNavigate } from "react-router-dom";
export default function Card({ pockmon, loading }) {
    const navigate = useNavigate();
    const getPockName = (pokname) => {
        navigate(`pokmon/${pokname}`);
    };

    return (
        <>
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                pockmon?.map((item, index) => (
                    <div
                        className="row d-flex justify-content-center hover-effects mb-4"
                        key={index}
                        onClick={() => {
                            getPockName(item?.name);
                        }}
                    >
                        <div className="col-md-2">
                            <div className="card img-card-section h-100">
                                <img
                                    className="card-img-top"
                                    src={item?.sprites.front_default}
                                    alt="Card image cap"
                                />
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="row">
                                <h3>Name : {item?.name}</h3>
                                <div className="col-md-12 mb-2">
                                    <div className="card">
                                        <div className="card-body">
                                            <p className="card-text">Id : {item?.id}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <p className="card-text">Height : {item?.height}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </>
    );
}
