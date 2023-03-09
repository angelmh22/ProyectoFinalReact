import React from 'react';
import imgLogo from '../img/logo.png';

function Footer() {
  return (

    <div>

      <section className="">
        <div className="container">
          <div className="row">
            <div>
              <h6>
                <img src={imgLogo} alt="" width="100" height="70" />
              </h6>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
