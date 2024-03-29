import React from "react";
import Link from "next/link";
import FeatureLange from "../features/FeatureLange";
import Image from "next/image";

const HeroBannerLange = () => {
  return (
    <div className="hero-banner-four">
      {/* <Image width="213" height="86"
        src="/images/shape/100.svg"
        alt="shape"
        className="shapes shape-four"
      /> */}
      <Image
        width="10"
        height="19"
        src="/images/shape/101.svg"
        alt="shape"
        className="shapes shape-five"
      />
      <Image
        width="242"
        height="433"
        src="/images/shape/102.svg"
        alt="shape"
        className="shapes shape-six"
      />
      <Image
        width="246"
        height="400"
        src="/images/shape/103.svg"
        alt="shape"
        className="shapes shape-seven"
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-lg-last">
            <div className="illustration-holder">
              <Image
                src="/images/lange/Header1.png"
                alt="shape"
                className="illustration"
                width={660}
                height={471}
              />
            </div>
            <p className="review-text">
              Seit mehr als <span>70 Jahren</span> helfen wir Ihnen.
            </p>
          </div>
          {/* End .col */}

          <div className="col-lg-6 order-lg-first">
            <div className="text-wrapper">
              <h1 data-aos="fade-up" data-aos-duration="1200">
                <span>beraten</span>
              </h1>
              <h1
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
                className="ps-4"
              >
                <span>planen</span>
              </h1>
              <h1
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
                className="ps-5"
              >
                <span>ausführen</span>
              </h1>
              <p
                className="sub-text"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                Regen, Hagel, Schnee, Schmutz – Ihr Haus hat einiges
                auszuhalten.
              </p>
              <Link
                href="#kontakt"
                className="theme-btn-five"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="150"
              >
                Kontaktieren Sie uns!
              </Link>
            </div>
            {/* /.text-wrapper */}
          </div>
          {/* End .col */}
        </div>
      </div>

      <div className="fancy-feature-eight mt-160 md-mt-100">
        <div className="container">
          <div className="bg-wrapper">
            <FeatureLange />
          </div>
        </div>
      </div>
      {/* /.fancy-feature-eight */}
    </div>
  );
  //  {/* /.hero-banner-four */}
};

export default HeroBannerLange;
