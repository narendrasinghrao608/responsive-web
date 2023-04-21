import React from "react";
import img from "../img/logo.png";
function Section() {
  return (
    <div className="background firstsection">
      <div className="box-main">
        <div className="firsthalf">
          <p className="text-big">Tvop discription</p>
          <p className="text-small">
            Mayapur is situated in an area somewhere in the middle of the rivers
            Hoogly and Jalangi and is one of the main of the nine islands of the
            Chaitanya Mahaprabhu's dham Nabadwip. It is located 130 km from
            kolkata and well connected by roads and rail networks from there.
            The holiest of all places in entire India, Mayapur Chandrodaya
            Temple of ISKCON is the major reason why devotees all over the world
            come to this sacred land. Inside you can see the magnificent deities
            of Pancatattva, Lord Nrisingha Dev, Srila Prabhupada and
            Radha-Madhav with the Gopis. This is a place flowing with devotion
            like no other place on earth.
          </p>
          <div className="buttons">
            <button className="btn">Read More</button>
            <button className="btn">Explore more</button>
          </div>
        </div>
        <div className="secondhalf">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Section;
