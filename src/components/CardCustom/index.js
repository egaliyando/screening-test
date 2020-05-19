import React from "react";
import "./card_custom.css";
import IconWa from "../../assets/images/icons/whatsapp.png";
import IconTrash from "../../assets/images/icons/trash.png";
import Switch2 from "../Switch/Switch2";

function CardCustom() {
  return (
    <div className="card-custom">
      <div className="d-flex justify-content-around">
        <span className="text-gradient2 w-6">Link #1</span>
        <span>
          <img className="icon-custom-card" src={IconWa} alt="" />
          Icon
        </span>
        <Switch2 />
        <span style={{ alignSelf: "center" }}>Display on page</span>
        <span style={{ alignSelf: "center" }}>
          <img className="icon-custom-card" src={IconTrash} alt="" />
          Remove link
        </span>
      </div>

      <div className="d-flex mt-3">
        <div className="img-titik">
          <span className="material-icons">drag_indicator</span>
        </div>
        <div className="w-10">
          <div className="form-group row ml-12">
            <span className="mw w-6">Link title</span>
            <input className="input-card-custom w-6" type="text" placeholder="Whatsapp" />
          </div>
          <div className="form-group row ml-12 mt-10">
            <span className="mw w-6">Link URL</span>
            <input className="input-card-custom w-6" type="text" placeholder="www.whatsapp.com/dummystore" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCustom;
