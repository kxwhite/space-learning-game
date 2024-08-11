import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PlanetGenerator from '../components/planetgenerator';




const CIS = () => {
  return (

    <div className='planet-background'>
      <div class="container-fluid">
        <div class="row justify-content-md-center">
          <div class="col-sm-1">
          </div>
          <div class="col-sm-1 align-self-center">
          <a href="http://localhost:3000/planetpage" class="btn">Back to menu</a>
          </div>
          <div class="col-sm-10">
          </div>
        </div>
        <div class="row justify-content-md-center">
          <div class="col-sm-6">
            <div className="level-selector">
              <p id="basics">Basics</p>
              <i class="bi bi-plus-circle-fill" id="basics-icon"></i>
              <p id="advanced">Advanced</p>
              <i class="bi bi-dash-circle-fill" id="advanced-icon"></i>
              <p id="expert">Expert</p>
              <i class="bi bi-dash-circle-fill" id="expert-icon"></i>
              <p id="god">GOD TIER</p>
              <i class="bi bi-dash-circle-fill" id="god-icon"></i>
              <img src="/planetpage_assets/pixel_planet02.png" class="img-fluid" alt="planet2" />
            </div>
          </div>

          <div class="col-sm-5 align-self-center">
            <div class="card">
              <div class="card-header">
                <h3>Planet of CIS</h3>
              </div>
              <div class="card" className='myCard'>
                <p class="card-text" className="text1">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                  eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                  Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
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

export default CIS;