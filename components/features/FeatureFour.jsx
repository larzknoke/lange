"use client";
import Image from "next/image";
import React from "react";

const FeatureContent = [
  {
    icon: "rolle",
    meta: "Langzeitschutz",
    subTitle: `Create customized popups and show the message at the lorem`,
    dataDelay: "0",
    picture: "AnstrichFeature",
  },
  {
    icon: "21",
    meta: "Embeded Forms",
    subTitle: `Collect website leads with embedded forms and integrate easily.`,
    dataDelay: "100",
  },
  {
    icon: "22",
    meta: "Autoresponder",
    subTitle: `Send welcome email to your new subscribers with a code.`,
    dataDelay: "300",
  },
];

const FeatureFour = () => {
  return (
    <div className="row justify-content-center">
      {FeatureContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.dataDelay}
        >
          <div className="block-style-five">
            <div className="icon">
              <Image
                width={72}
                height={72}
                style={{ objectFit: "contain" }}
                src={`/images/lange/icons/${val.icon}.svg`}
                alt="icon"
              />
            </div>
            <h6 className="title">
              <span>{val.meta}</span>
            </h6>
            <p>{val.subTitle}</p>
            <Image
              width={500}
              height={750}
              style={{ objectFit: "contain" }}
              src={`/images/lange/${val.picture}.jpg`}
              alt="picture"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureFour;
