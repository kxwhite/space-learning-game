import * as React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import { PlusIcon } from '../public/planetpage_assets/plusicon'
import { DashIcon } from '../public/planetpage_assets/dashicon'

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
              <Link href="/game" id="basics-icon" className='select-icon-link'>
                <PlusIcon className="select-icon" id="basics-icon"/>
              </Link>
              <p id="advanced">Advanced</p>
              <DashIcon className="select-icon" id="advanced-icon"/>
              <p id="expert">Expert</p>
              <DashIcon className="select-icon" id="expert-icon"/>
              <p id="god">GOD TIER</p>
              <DashIcon className="select-icon" id="god-icon"/>
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
