import React, { useState } from "react";
import browse from "../public/imgs/browse2.png";
import lion from "../public/imgs/lion-fix.png";
import tv from "../public/imgs/tv-icon.png";
import about from "../public/imgs/about.png";
import blog from "../public/imgs/blog-icon.png";
import Image from "next/image";

export default function Sidebar() {

  return (
    // <>
    <section className="sidebar">
      <ul className="li-browse">
        <li className="lili">
          <div className="browse">
            <Image width={"50vw"} height={"50vw"} src={browse} alt="gbr" />
          </div>
          <a href="#" className="active">
            Browse
          </a>
        </li>
      </ul>
      <ul className="li-browse2">
        <li className="lili">
          <div className="browse">
            <Image width={"50vw"} height={"50vw"} src={lion} alt="gbr" />
          </div>
          <a href="#" className="active">
            Suggest Attraction
          </a>
        </li>
        <hr className="hr-a " />
        <li className="lili">
          <div className="browse">
            <Image width={"50vw"} height={"50vw"} src={tv} alt="gbr" />
          </div>
          <a href="#" className="active">
            Videos
          </a>
        </li>
        <hr className="hr-a " />
        <li className="lili">
          <div className="browse">
            <Image width={"50vw"} height={"50vw"} src={blog} alt="gbr" />
          </div>
          <a href="#" className="active">
            Blog
          </a>
        </li>
        <hr className="hr-a " />
        <li className="lili">
          <div className="browse">
            <Image width={"50vw"} height={"50vw"} src={about} alt="gbr" />
          </div>
          <a href="#" className="active">
            About
          </a>
        </li>
        <hr className="hr-a " />
      </ul>
    </section>
    // </>
  );
}
