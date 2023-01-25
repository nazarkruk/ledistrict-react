import React from "react";
import LibertyImg from "../app/assets/img/rest_liberty_bistro.jpg";
import LeBarImg from "../app/assets/img/rest_le_bar.jpg";
import LappartImg from "../app/assets/img/rest_lappart.jpg";
import "../App.css";

export const Restaurants = () => {
  return (
    <div className="container-fluid rest-section">
      <div className="row">
        <div className="col-lg-8 py-2">
          <div className="card h-100">
            <img
              className="card-img h-100"
              src={LibertyImg}
              alt="Liberty Bistro"
            />
            <div className="card-img-overlay col-6 mx-auto  text-white d-flex flex-column justify-content-center text-center">
              <div className="caption-bg ">
                <h4 className="card-title mt-2">LIBERTY BISTRO</h4>
                <div className="border-top border-light w-25 mx-auto my-3"></div>
                <p className="card-text mb-2">
                  FRENCH MENU & EXTENSIVE WINE LIST
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 ">
          <div className="row">
            <div className="col-12  py-2">
              <div className="card">
                <img className="card-img" src={LeBarImg} alt="Wine Bar" />
                <div className="card-img-overlay col-6 mx-auto  text-white d-flex flex-column justify-content-center text-center">
                  <div className="caption-bg ">
                    <h4 className="card-title mt-2">LE BAR</h4>
                    <div className="border-top border-light w-25 mx-auto my-3"></div>
                    <p className="card-text mb-2">CRAFTED COCKTAILS</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12  py-2">
              <div className="card">
                <img className="card-img" src={LappartImg} alt="L-Appart" />
                <div className="card-img-overlay col-6 mx-auto  text-white d-flex flex-column justify-content-center text-center">
                  <div className="caption-bg ">
                    <h4 className="card-title mt-2">L'APPART</h4>
                    <div className="border-top border-light w-25 mx-auto my-3"></div>
                    <p className="card-text mb-2">MICHELIN STAR DINING</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
