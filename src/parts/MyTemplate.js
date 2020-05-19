import React from "react";
import CardTemplate from "../components/CardTemplate";
import Layout from "../components/Layout";

function MyTemplate() {
  return (
    <div className="tab-pane fade" id="my-template" role="tabpanel">
      <div className="row">
        <div className="col-md-7 mt-3">
          <h4>My Templete</h4>
          <hr class="hr-line" />
          <CardTemplate />
        </div>
        <Layout />
      </div>
    </div>
  );
}

export default MyTemplate;
