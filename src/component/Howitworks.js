import React, { useState } from 'react';
import Work from "../API/Work.js";

const Howitworks = () => {
  const [workData, setWorkData] = useState(Work);
  console.log(workData);
  return (
    <section>
      <div className="work-container container">
        <h1 className="main-heading text-center">How Does It Work</h1>
        <div className="row">

          {workData.map((v) => {
            return (
              <>
                <div className="col-12 col-lg-4 text-center work-container-subdiv">
                  <i id='vlogo' class={v.logo}></i>
                  <h2 className='sub-heading'>{v.title}</h2>
                  <p className='main-hero-para w-100'>{v.info}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Howitworks;