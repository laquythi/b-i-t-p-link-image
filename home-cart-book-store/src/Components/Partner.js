import React from "react";
import "./Partner.css";

class Partner extends React.Component {
  render() {
    return (
      <section className="partner">
        <div className="text-center">
          <h4>
            Cùng <span style={{ color: "#0DC5ED" }}>VEP</span> - Chung tay xây
            dựng tương lai
          </h4>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl col-lg col-md-2 col-sm-2 col-xs-2">
              <img
                src="images/partner/alphabook-sm.png"
                title="alphabook"
                alt="true"
              />
            </div>
            <div className="col-xl col-lg col-md-2 col-sm-2 col-xs-2">
              <img src="images/partner/dongtay-sm.png" title="dongtay" alt="true" />
            </div>
            <div className="col-xl col-lg col-md-2 col-sm-2 col-xs-2">
              <img src="images/partner/fahasa-sm.png" title="fahasa" alt="true" />
            </div>
            <div className="col-xl col-lg col-md-2 col-sm-2 col-xs-2">
              <img src="images/partner/kimdong-sm.png" title="kimdong" alt="true" />
            </div>
            <div className="col-xl col-lg col-md-2 col-sm-2 col-xs-2">
              <img src="images/partner/nhanam-sm.png" title="nhanam" alt="true" />
            </div>
            <div className="col-xl col-lg col-md-2 col-sm-2 col-xs-2">
              <img
                src="images/partner/trungnguyen-sm.png"
                title="trungnguyen"
                alt="true"
              />
            </div>
            <div className="col-xl col-lg col-md-2 col-sm-2 col-xs-2">
              <img src="images/partner/grap-sm.png" title="grab" alt="true" />
            </div>
            <div className="col-xl col-lg col-md-2 col-sm-2 col-xs-2">
              <img src="images/partner/dhl-sm.png" title="DHL" alt="true" />
            </div>
            <div className="col-xl col-lg col-md-2 col-sm-2 col-xs-2">
              <img src="images/partner/tiki-sm.png" title="tiki" alt="true" />
            </div>
            <div className="col-xl col-lg col-md-2 col-sm-2 col-xs-2">
              <img src="images/partner/ups-sm.png" title="UPS" alt="true" />
            </div>
            <div className="col-xl col-lg col-md-2 col-sm-2 col-xs-2">
              <img src="images/partner/vietgang-sm.png" title="vietgang" alt="true" />
            </div>
            <div className="col-xl col-lg col-md-2 col-sm-2 col-xs-2">
              <img
                src="images/partner/vietnampost-sm.png"
                title="vietnampost"
                alt="true"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Partner;