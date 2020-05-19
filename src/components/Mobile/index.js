import React from "react";
import "./mobile.css";

function Mobile() {
  return (
    <div id="borderimage" className="container-hp">
      <div className="header-hp activee">
        <div className="circles"></div>
        <h6>Dummy Store</h6>
        <p>Dummy Store tagline</p>
      </div>

      <div className="content-hp">
        <p className="text-hp">
          Dummy store description , pelase ignore, only for tes use! <br />
          Go check out my store and my links!
        </p>
        <div className="d-flex justify-content-center btn-hp ">
          <button className="cr-black">
            <img src="img/home3.png" alt="" /> <span className="text-hp-one">Start shopping!</span>
          </button>
        </div>
        <div className="d-flex justify-content-center btn-hp">
          <button>
            <img src="img/wa.png" alt="" /> <span className="text-hp-two">Whatsapp</span>
          </button>
        </div>
        <div className="d-flex justify-content-center btn-hp">
          <button>
            <img src="img/facebook.png" alt="" /> <span className="text-hp-two">Facebook</span>
          </button>
        </div>
        <div className="d-flex justify-content-center btn-hp">
          <button>
            <img src="img/shopee.png" alt="" /> <span className="text-hp-two">Shopee</span>
          </button>
        </div>

        <div className="d-flex justify-content-center btn-hp">
          <button>
            <img src="img/tokopedia.png" alt="" /> <span className="text-hp-two">Tokopedia</span>
          </button>
        </div>
      </div>

      <hr className="hr-hp" />
    </div>
  );
}

export default Mobile;
