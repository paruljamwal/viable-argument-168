import React from "react";
import "./Pricing.css";
const Pricingpage = () => {
  return (
    <div>
      <main className="">
        <section className="topsection">
          <div className="containerarticle">
            <div className="articlecenter">
            <h1 className="page-title--landing">Simple pricing with no extra fees</h1>
            <div className="pagesubtitle">
    <h3>Start with no commitment. Try everything. Subscribe if you love it.</h3>
            </div>
            </div>
            <div className="topswitch">
              <div className="switchplan">
                <input placeholder="" />
              </div>
            </div>
          </div>
          <div className="pricingcards">
            <div className="carditems">
              <h3 className="pricingtitle">All-in-one</h3>
              <p className="pricingsubtitle">
                All features, plus best-in-class integrations
              </p>
              <p className="costvalue">
                <span className="costvaluers">8</span>
                <span className="costvaluechapni">.50</span>
                <span className="costvaluedolor">$</span>
              </p>
              <p className="subtitle">
                <b>/ user / month, starting at </b>
                <span className="tooltip-hover">
                  5 users
                 
                </span>
              </p>
              <ul>
                <li>Unlimited users</li>
                <li>Unlimited projects</li>
                <li>Unlimited integrations</li>
                <li>All features</li>
                <li>Fast and responsive support</li>

              </ul>
              <button className='actionbtn'>Try free</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pricingpage;
