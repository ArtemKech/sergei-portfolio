import React from "react";
import "../styles/Collage.css";
import collage_1 from "../assets/home/collage_1.jpg";
import collage_2 from "../assets/home/collage_2.jpg";
import collage_3 from "../assets/home/collage_3.jpg";
import collage_4 from "../assets/home/collage_4.jpg";
import collage_5 from "../assets/home/collage_5.jpg";
import collage_6 from "../assets/home/collage_6.jpg";
import collage_7 from "../assets/home/collage_7.jpg";

const Collage: React.FC = () => {
  return (
    <>
      <div className="collage_container">
        {/* double image row */}
        <figure className="collage_sub_container">
          <div className="post-image">
            <img src={collage_1} alt="Collage Image 1" />
          </div>
          <div className="post-image">
            <img src={collage_2} alt="Collage Image 1" />
          </div>
        </figure>
        {/* triple image row */}
        <figure className="collage_sub_container">
          <div className="post-image">
            <img src={collage_5} alt="Collage Image 4" />
          </div>
          <div className="post-image">
            <img src={collage_6} alt="Collage Image 5" />
          </div>
          <div className="post-image">
            <img src={collage_7} alt="Collage Image 6" />
          </div>
        </figure>
        {/* double image row */}
        <figure className="collage_sub_container">
          <div className="post-image">
            <img src={collage_3} alt="Collage Image 2" />
          </div>
          <div className="post-image">
            <img src={collage_4} alt="Collage Image 3" />
          </div>
        </figure>
      </div>
    </>
  );
};

export default Collage;
