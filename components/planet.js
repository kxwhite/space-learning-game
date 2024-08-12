import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';




const planet = (props) => {
  return (
    <div className="planet-background">
      <div className="container-fluid">
        <div className="row justify-content-md-center">
          <div className="col-sm-1">
            <br></br>
            <br></br>
          </div>
          <div className="col-sm-1 align-self-center">
            <button
              onClick={props.toggle}
              className="back-to-planets-button"
            >
              Back to menu
            </button>
          </div>
          <div className="col-sm-10"></div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-sm-6">
            <div className="level-selector">
              <p id="basics">Basics</p>
              <Link className="level-selector" href="/game" id="basics-icon">
                <i className="bi bi-plus-circle-fill" id="basics-icon"></i>
              </Link>
              <p id="advanced">Advanced</p>
              <i className="bi bi-dash-circle-fill" id="advanced-icon"></i>
              <p id="expert">Expert</p>
              <i className="bi bi-dash-circle-fill" id="expert-icon"></i>
              <p id="god">GOD TIER</p>
              <i className="bi bi-dash-circle-fill" id="god-icon"></i>
              <img src={props.img} className="img-fluid" alt={props.name} />
            </div>
          </div>

          <div className="col-sm-5 align-self-center">
            <div className="planet-info">
              <div className="planet-info-header">
                <h3>Planet of {props.name}</h3>
              </div>
              <div className="myCard">
                <p className="text1">
                  {props.desc}
                  <br/><br/>
                  To learn more about {props.name} Practice:&nbsp;
                  <a
                    href={props.linkPractice}
                    target="_blank"
                    rel='noreferrer'
                    id="more-info-link"
                    >
                    CLICK HERE
                  </a>{" "}
                  <br></br>
                  For training and certification:&nbsp;
                  <a
                    href={props.linkCert}
                    target="_blank"
                    rel='noreferrer'
                    id="more-info-link"
                  >
                    CLICK HERE
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    </div>
  );
}

export default planet;
