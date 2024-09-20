import "./App.css";
import ReactPlayer from 'react-player';

function App() {
  return (
    <>
      <main>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="">
              <img src="" className="navbar-brand-image img-fluid" alt="" />
              Centrum
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-lg-auto">
                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#section_1">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#section_2">
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#section_3">
                    Services
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#section_4">
                    Reviews
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#section_5">
                    Contact
                  </a>
                </li>
              </ul>

              <div className="ms-lg-3">
                <a className="btn custom-btn custom-border-btn" href="">
                  Reservation
                  <i className="bi-arrow-up-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>

        <section
          className="hero-section d-flex justify-content-center align-items-center"
          id="section_1"
        >
          <div style={{ position: 'absolute' }}>
            <ReactPlayer
              url="/centrum-video.mp4"
              playing
              loop
              muted
              width="100%"
              height="100%"
            />
          </div>
          

          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-12 mx-auto">
                <em className="small-text"> welcome to</em>

                <h1>CENTRUM</h1>

                <p className="text-white mb-4 pb-lg-2">
                  where every corner feels like <em>home</em>.
                </p>
              </div>
            </div>
          </div>

          <div className="hero-slides"></div>
        </section>

        <section className="about-section section-padding" id="section_2">
          <div className="section-overlay"></div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-12">
                <div className="ratio ratio-1x1">
                <ReactPlayer
                    className="custom-video"
                    url="/pexels-mike-jones-9046237.mp4"
                    playing
                    loop
                    muted
                    width="100%"
                    height="100%"
                  />
                  <div className="about-video-info d-flex flex-column">
                    <h4 className="mt-auto">We Started since ****.</h4>
                    <h5>What&apos;s more in Centrum?</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-12 mt-4 mt-lg-0 mx-auto">
                <em className="text-white"> Cebutech</em>

                <h2 className="text-white mb-3">Facility Centrum</h2>

                <p className="text-white">
                  The establishment was primarily made to cater practical
                  training of the Hospitality Management students of CTU-Danao.
                </p>

                <p className="text-white">
                  {" "}
                  However, it started to attract local and tourist costumers, so
                  the administration decided accomodate even public reservations
                  and bookings on 2021.{" "}
                </p>

                <a
                  href="#barista-team"
                  className="smoothscroll btn custom-btn custom-border-btn mt-3 mb-4"
                >
                  Meet our people
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          className="barista-section section-padding section-bg"
          id="barista-team"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-12 text-center mb-4 pb-lg-2">
                <em className="text-white">Get to know the people behind</em>

                <h2 className="text-white">CTU Facility Centrum</h2>
              </div>

              <div className="col-lg-3 col-md-6 col-12 mb-4">
                <div className="team-block-wrap">
                  <div className="team-block-info d-flex flex-column">
                    <div className="d-flex mt-auto mb-3">
                      <h4 className="text-white mb-0">
                        {" "}
                        Dr. Rose Mary Almacen{" "}
                      </h4>
                    </div>

                    <p className="text-white mb-0">Campus Director</p>
                  </div>

                  <div className="team-block-image-wrap">
                    <img
                      src="images/team/smiley-business-woman-working-cashier.jpg"
                      className="team-block-image img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12 mb-4">
                <div className="team-block-wrap">
                  <div className="team-block-info d-flex flex-column">
                    <div className="d-flex mt-auto mb-3">
                      <h4 className="text-white mb-0"> </h4>
                    </div>

                    <p className="text-white mb-0"> </p>
                  </div>

                  <div className="team-block-image-wrap">
                    <img
                      src="images/team/smiley-business-woman-working-cashier.jpg"
                      className="team-block-image img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12 mb-4">
                <div className="team-block-wrap">
                  <div className="team-block-info d-flex flex-column">
                    <div className="d-flex mt-auto mb-3">
                      <h4 className="text-white mb-0"></h4>
                    </div>

                    <p className="text-white mb-0"></p>
                  </div>

                  <div className="team-block-image-wrap">
                    <img
                      src="images/team/smiley-business-woman-working-cashier.jpg"
                      className="team-block-image img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <div className="team-block-wrap">
                  <div className="team-block-info d-flex flex-column">
                    <div className="d-flex mt-auto mb-3">
                      <h4 className="text-white mb-0"></h4>
                    </div>

                    <p className="text-white mb-0"></p>
                  </div>

                  <div className="team-block-image-wrap">
                    <img
                      src="images/team/smiley-business-woman-working-cashier.jpg"
                      className="team-block-image img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
