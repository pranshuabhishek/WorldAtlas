import React from "react";
import CountryData from "../api/countryData.json"
export const About = () => {
    return <section className="section-about container">
        <h2 className="container-title">
            Here are the Intersting facts
            <br />
            we're proud of
        </h2>
        <div className="gradient-cards">
            {
                CountryData.map((item) => {
                    const {id, countryName, capital, population, interestingFact} = 
                    item;
                    return ( <div className="card" key={id}>
                                <div className="container-card bg-yellow-box">
                                   <p className="card-tittle">{countryName} </p>
                                   <p>
                                      <span className="card-description">Capital: </span>
                                       {capital}
                                   </p>
                                   <p>
                                        <span className="card-description">Population: </span>
                                      { population}
                                   </p>
                                   <p>
                                         <span className="card-description">InterestingFact: </span>
                                          {interestingFact}
                                    </p>
                                </div>
                            </div>
                        )
                })
            }
           
        </div>
    </section>
};