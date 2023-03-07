import React from 'react';
import imgLogo from '../img/logo.png';

function Footer() {
  return (

    <div className="text-center text-lg-start bg-negro border-foot text-light">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="container text-center ">
          <a className="btn text-white btn-floating btn-circle btn-foot bg-facebook mx-3" href="#!">
            <i className="fab fa-facebook " />
          </a>
          <a className="btn text-white btn-floating btn-circle btn-foot bg-twitter mx-3" href="#!">
            <i className="fab fa-twitter" />
          </a>
          <a className="btn text-white btn-floating btn-circle btn-foot bg-google mx-3" href="#!">
            <i className="fab fa-google" />
          </a>
          <a className="btn text-white btn-floating btn-circle btn-foot bg-instagram mx-3" href="#!">
            <i className="fab fa-instagram" />
          </a>
          <a className="btn text-white btn-floating btn-circle btn-foot bg-linkedin mx-3" href="#!">
            <i className="fab fa-linkedin-in" />
          </a>
          <a className="btn text-white btn-floating btn-circle btn-foot bg-github mx-3" href="#!">
            <i className="fab fa-github" />
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 ml-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <img src={imgLogo} alt="" width="150" height="70" />
              </h6>

            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mr-5 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Paginas legales
              </h6>
              <p>
                <a href="paginaslegales.html" className="text-reset text-decoration-none">Aviso legal</a>
              </p>
              <p>
                <a href="paginaslegales.html" className="text-reset text-decoration-none">Política de privacidad</a>
              </p>
              <p>
                <a href="paginaslegales.html" className="text-reset text-decoration-none">Política de cookies</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4">
        <p>
          © 2023 Copyright:
          <a className="text-reset fw-bold text-decoration-none" href="https://api.disneyapi.dev"> disney.com</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
