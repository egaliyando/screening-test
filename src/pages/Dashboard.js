import React from "react";
import Header from "../parts/Header";
import Sidebar from "../parts/Sidebar";
import Jumrotron from "../components/Jumbotron";
import BoxInfo from "../components/BoxInfo";
import Feedback from "../components/Feedback";
import dashboard from "../json/dashboard.json";

function Dashboard(props) {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-md-3">
          <Sidebar {...props} />
        </div>
        <div className="col-md-9 m-0">
          <Jumrotron />
          <div className="container row box-info">
            <BoxInfo data={dashboard.visitor} />
            <BoxInfo data={dashboard.page} />
            <BoxInfo data={dashboard.product} />
            <BoxInfo data={dashboard.sales} />
          </div>
          <Feedback />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
