import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';




const planet = (props) => {



  return (

    <div className='planet-background'>
      <div class="container-fluid">
        <div class="row justify-content-md-center">
          <div class="col-sm-1">
            <br></br>
            <br></br>
          </div>
          <div class="col-sm-1 align-self-center">
          <button onClick={props.toggle} class="btn" className="back-to-planets-button">Back to menu</button>
          </div>
          <div class="col-sm-10">
          </div>
        </div>
        <div class="row justify-content-md-center">
          <div class="col-sm-6">
            <div className="level-selector">
              <p id="basics">Basics</p>
              <a className="level-selector" href="/game" id="basics-icon"><i class="bi bi-plus-circle-fill" id="basics-icon"></i></a>
              <p id="advanced">Advanced</p>
              <i class="bi bi-dash-circle-fill" id="advanced-icon"></i>
              <p id="expert">Expert</p>
              <i class="bi bi-dash-circle-fill" id="expert-icon"></i>
              <p id="god">GOD TIER</p>
              <i class="bi bi-dash-circle-fill" id="god-icon"></i>
              <img src={props.img} class="img-fluid" alt={props.name} />
            </div>
          </div>

          <div class="col-sm-5 align-self-center">
            <div class="card" className="planet-info">
              <div class="card-header" className="planet-info-header">
                <h3>Planet of {props.name}</h3>
              </div>
              <div class="card" className='myCard'>
                <p class="card-text" className="text1">


SAP SE (Systems Applications and Products in Data Processing) is a German company, started by five IBM engineers in the 1970s. It is the world’s largest provider of enterprise resource planning (ERP) software. 
SAP S4/Hana is the latest software package which covers all day-to-day processes of enterprise and core capabilities, and optimised for SAP's in-memory database - SAP Hana. 
It integrates functions from lines of businesses as well as industry solutions, and also re-integrates portions of SAP Business Suit products. SAP ERP comprises several independent functional modules 
that can be purchased and customised according to the business requirements. Some functional modules are: Financial Accounting (FI), Controlling (CO), Sales & Distribution (SD), Materials Management (MM), Quality Management (QM),
 Production Planning (PP), Logistics Execution (LE), etc.
ABAP is a primary programming language used to create, modify and enhance SAP applications. ABAP forms the basis of the entire SAP system.
SAP is a part of Infosys's EAS (Enterprise Application Services) unit. Infosys SAP practice provides enterprises with end-to-end consulting, implementation and support services.

<br></br>
To learn more about EAS unit and SAP Practice:&nbsp;  
<a href="https://infosystechnologies.sharepoint.com/sites/EnterpriseApplicationServices" id="more-info-link">CLICK HERE</a> <br></br>
For training and certification:&nbsp; 
<a href="https://lex.infosysapps.com/web/en/page/lex_auth_013004586600325120402" id="more-info-link">CLICK HERE</a></p>
              </div>
            </div>
          </div>
          <div class="col-sm-1">
          </div>
        </div>
      </div>

    </div>
  );
}

export default planet;