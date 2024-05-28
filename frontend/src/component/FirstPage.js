import React from "react";
import img from "../images/Screenshot-_1280_.jpeg";
import { Link } from "react-router-dom";

function FirstPage() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Link to={"http://" + window.location.hostname + ":3000/"}>
          <button
            type="button"
            className="btn  btn-outline-warning btn-lg"
            style={{ position: "absolute", top: 400, right: 600 }}
          >
            Let's Get Started ..
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FirstPage;
