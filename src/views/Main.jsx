import React from "react";

export default function Main() {
  return (
    <div>
      <div className="home_view" id="home">
        <div className="home_text">
          <div className="danielrondon_text">
            <p>DANIEL</p>
            <p>RONDON</p>
          </div>
          <div className="fullstack_webdev_text">FullStackWebDeveloper</div>
        </div>
      </div>

      <div className="about_view" id="about">
        <div className="about_text">
          <p className="about_fromA">
            From a professional background in architecture and 3D visualization,
            I have now become a web developer.
          </p>
          <p className="about_IPoss">
            I possess valuable skills that can benefit your company.
          </p>
        </div>
        <div className="about_photoText">
          <div className="circle_container">
            <img src={"../images/danielRG_photo_noBG.png"} alt="danielRG pic" />
          </div>
          <p className="about_cleanDes">
            “Clean design and functionality are the driving forces behind my
            creative mind.”
          </p>
        </div>
      </div>
    </div>
  );
}
