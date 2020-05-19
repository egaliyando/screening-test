import React from "react";
import IconHome from "../../assets/images/home3.png";
import "./card_template.css";

function CardTemplate() {
  return (
    <div className="row">
      <div className="col-6">
        <div className="boxs">
          <div className="bg-header1">
            <div className="circles"></div>
          </div>

          <div className="content-btn text-center">
            <div className="btn1">
              <button className="btn-home">
                <img src={IconHome} alt="" />
              </button>
            </div>

            <div className="btn2">
              <button className="btn-link">Your link</button>
            </div>
          </div>
        </div>

        <div className="text-f">
          <span>Basic Templete</span>
        </div>
      </div>

      <div className="col-6">
        <div className="boxs">
          <div className="bg-header2">
            <div className="circles"></div>
          </div>

          <div className="content-btn text-center">
            <div className="btn1">
              <button className="btn-home-left">
                <img src={IconHome} alt="" />
              </button>
            </div>

            <div className="btn2">
              <button className="btn-link">Your link</button>
            </div>
          </div>
        </div>
        <div className="text-f">
          <span>Basic Templete</span>
          <label className="switch">
            <span className="tombol-active">active</span>
            <input type="checkbox" checked />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default CardTemplate;
