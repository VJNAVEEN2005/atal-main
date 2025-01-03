import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AIM from "../../assets/Homepage/Partners/AIM.png";
import PTU from "../../assets/Homepage/Partners/PTU.png";
import Seed from "../../assets/Homepage/Partners/Seed.png";
import Start from "../../assets/Homepage/Partners/START.png";
import Eagle from "../../assets/Homepage/Partners/Eagle.png";
import Schn from "../../assets/Homepage/Partners/Schn.png";
import S from "../../assets/Homepage/Partners/S.png";
import Bee from "../../assets/Homepage/Partners/Bee.png"
import CII from "../../assets/Homepage/Partners/CII.png";
import MSME from "../../assets/Homepage/Partners/MSME.png";
import BCIL from "../../assets/Homepage/Partners/BCIL.png";
import Digi from "../../assets/Homepage/Partners/360.png";
import Idea from "../../assets/Homepage/Partners/Idea.png";
import Easy from "../../assets/Homepage/Partners/Easy.png";
import Lucas from "../../assets/Homepage/Partners/Lucas.png";
import Kris from "../../assets/Homepage/Partners/Kris.png";
import Ktech from "../../assets/Homepage/Partners/Ktech.png";
import touch from "../../assets/Homepage/Partners/touch.png";
import START from "../../assets/Homepage/Partners/START.png";
import Resuegent from "../../assets/Homepage/Partners/Resuegent.png";
import Zoho from "../../assets/Homepage/Partners/Zoho.png";
import Pip from "../../assets/Homepage/Partners/Pip.png";
import RJ from "../../assets/Homepage/Partners/RJ.png";
import NIT from "../../assets/Homepage/Partners/NIT.png";
import River from "../../assets/Homepage/Partners/River.png";
import SMVEC from "../../assets/Homepage/Partners/SMVEC.png";
import IFET from "../../assets/Homepage/Partners/IFET.png";
import aws from "../../assets/Homepage/Partners/aws.png";


export const Partner = () => {
  const logos = [
    <img src={AIM} alt="AIM Logo" style={{ width: 110, height: 50 }} />,
    <img src={PTU} alt="PTU Logo" style={{ width: 80, height: 80 }} />,
    <img src={Seed} alt="Seed Logo" style={{ width: 50, height: 50 }} />,
    <img src={Start} alt="Start Logo" style={{ width: 80, height: 50 }} />,
    <img src={Eagle} alt="Eagle Logo" style={{ width: 80, height: 50 }} />,
    <img src={Schn} alt="Schneider Logo" style={{ width: 80, height: 50 }} />,
    <img src={S} alt="Seed Logo" style={{ width: 50, height: 50 }} />,
    <img src={Bee} alt="BeeHive Logo" style={{ width: 70, height: 50 }} />,
    <img src={CII} alt="CII Logo" style={{ width: 100, height: 50 }} />,
    <img src={MSME} alt="MSME Logo" style={{ width: 80, height: 50 }} />,
    <img src={BCIL} alt="BCIL Logo" style={{ width: 70, height: 70 }} />,
    <img src={Digi} alt="Digi Logo" style={{ width: 80, height: 50 }} />,
    <img src={Idea} alt="Digi Logo" style={{ width: 80, height: 50 }} />,
    <img src={Easy} alt="Digi Logo" style={{ width: 50, height: 50 }} />,
    <img src={Lucas} alt="Digi Logo" style={{ width: 90, height: 50 }} />,
    <img src={Kris} alt="Digi Logo" style={{ width: 80, height: 50 }} />,
    <img src={Ktech} alt="Digi Logo" style={{ width: 70, height: 50 }} />,
    <img src={touch} alt="Digi Logo" style={{ width: 80, height: 50 }} />,
    <img src={START} alt="Digi Logo" style={{ width: 80, height: 50 }} />,
    <img src={Resuegent} alt="Digi Logo" style={{ width: 100, height: 50 }} />,
    <img src={Zoho} alt="Digi Logo" style={{ width: 80, height: 50 }} />,
    <img src={Pip} alt="Digi Logo" style={{ width: 80, height: 80 }} />,
    <img src={RJ} alt="Digi Logo" style={{ width: 90, height: 80 }} />,
    <img src={NIT} alt="Digi Logo" style={{ width: 80, height: 80 }} />,
    <img src={River} alt="Digi Logo" style={{ width: 130, height: 50 }} />,
    <img src={SMVEC} alt="Digi Logo" style={{ width: 130, height: 50 }} />,
    <img src={IFET} alt="Digi Logo" style={{ width: 130, height: 50 }} />,
    <img src={aws} alt="Digi Logo" style={{ width: 90, height: 50 }} />,
    /*<FaInstagram size={50} color="#C13584" />,
    <FaLinkedin size={50} color="#0077B5" />,
    <FaYoutube size={50} color="#FF0000" />,
    <FaGithub size={50} color="#333" />,
    <FaTiktok size={50} color="#000000" />,*/
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="partner-carousel">
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>OUR PARTNERS</h2>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '100%', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
              {logo}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Partner;
