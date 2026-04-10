import { FaArrowRight } from "react-icons/fa";
import React from "react";

export const HeroSection = () => {
    return (
            <main className="hero-section main">
                <div className="container grid grid-two-cols">
                  <div className="hero-content">
                     <h1 className="heading-xl">
                        Explore the World, One Country at a Time.
                     </h1>
                     <p className="paragraph">
                        Discover the history, culture and beauty of every nation.Sort,
                        search and filter through countries to find the details you need
                     </p>
                     <button className="btn btn-darken btn-inline bg-white-box">
                        Start Exploring <FaArrowRight />
                     </button>
                  </div>
                  <div className="hero-image">
                    <img src="dist/images/world2.jpg" alt="World is beauty"
                      className="banner-image"
                    />
                  </div>
                </div>
            </main>
        );
}