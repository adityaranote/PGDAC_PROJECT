import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="container my-5 py-5">
        <div className="row">
              <div className="col-sm-4">
                <div class="card p-3 m-2">
                  <img
                    src={"./assets/mobilesrap.jpg"}
                    style={{height:"200px"}}
                    class="card-img-top"
                    alt="none"
                  />
                  <div class="card-body">
                    <a href="/user_login" className="stretched-link nav-link text-dark"><h4 class="card-text">Mobiles</h4></a>
          
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div class="card p-3 m-2">
                  <img
                    src={"./assets/ref.jpg"}
                    style={{height:"200px"}}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <a href="/user_login" className="stretched-link nav-link text-dark"><h4 class="card-text">Refrigerators</h4></a>
            
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div class="card p-3 m-2">
                  <img
                    src={"./assets/laptop.jpg"}
                    style={{height:"200px"}}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <a href="/user_login" className="stretched-link nav-link text-dark"><h4 class="card-text">Laptops</h4></a>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div class="card p-3 m-2">
                  <img
                    src={"./assets/wm.jpg"}
                    style={{height:"200px"}}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <a href="/user_login" className="stretched-link nav-link text-dark"><h4 class="card-text">Washing Machines</h4></a>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div class="card p-3 m-2">
                  <img
                    src={"./assets/printer.jpg"}
                    style={{height:"200px"}}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <a href="/user_login" className="stretched-link nav-link text-dark"><h4 class="card-text">Printers</h4></a>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                     
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div class="card p-3 m-2">
                  <img
                    src={"./assets/hd.jpg"}
                    style={{height:"200px"}}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <a href="/user_login" className="stretched-link nav-link text-dark"><h4 class="card-text">Dryers</h4></a>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Home;