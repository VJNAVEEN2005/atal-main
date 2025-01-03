import React from 'react';
import styled from 'styled-components';
import digi from '../../assets/Partnerspage/Corporate/360.png';
import di from '../../assets/Partnerspage/Corporate/1000.png';
import Easy from '../../assets/Partnerspage/Corporate/easy.png';
import idea from '../../assets/Partnerspage/Corporate/Ideation.png';
import kris from '../../assets/Partnerspage/Corporate/Kris.png';
import ktech from '../../assets/Partnerspage/Corporate/Ktech.png';
import lucas from '../../assets/Partnerspage/Corporate/Lucas.png';
import re from '../../assets/Partnerspage/Corporate/Resuegent.png';
import schneider from '../../assets/Partnerspage/Corporate/Schneider.png';
import tele from '../../assets/Partnerspage/Corporate/Tele.png';
import touch from '../../assets/Partnerspage/Corporate/Touch.png';
import zoho from '../../assets/Partnerspage/Corporate/Zoho.png';


const Cooperative = () => {
  const cooperativePartners = [
    { name: '360DigiTMG Private Limited ', logo: digi },
    { name: '10000StartupsIndia', logo: di },
    { name: 'Easy To Pitch Networks Pvt. Ltd. ', logo: Easy },
    { name: 'IdeationIP ', logo: idea },
    { name: 'KRIS HAGAN', logo: kris},
    { name: 'Kaivalya Technologies Pvt Ltd.', logo: ktech},
    { name: 'Lucas TVS Ltd. ', logo: lucas },
    { name: 'Resurgent India Ltd ', logo: re },
    { name: 'Schneider Prototyping India Private Limited ', logo: schneider },
    { name: 'Telecommunications Consultants India Limited ', logo: tele},
    { name: 'Touch Energy Technologies  ', logo: touch },
    { name: 'Zoho Corporation Pvt. Ltd', logo: zoho},
  ];

  return (
    <CooperativeContainer>
      <h2>Our Corporative Partners</h2>
      <PartnersContainer>
        {cooperativePartners.map((partner, index) => (
          <PartnerCard key={index}>
            <PartnerLogo src={partner.logo} alt={`${partner.name} logo`} />
            <Overlay>
              <PartnerName>{partner.name}</PartnerName>
            </Overlay>
          </PartnerCard>
        ))}
      </PartnersContainer>
    </CooperativeContainer>
  );
};

export default Cooperative;

const CooperativeContainer = styled.div`
  text-align: center;
  padding: 20px;

  h2 {
    font-size: 1.8rem;
    color: #000;
  }

  @media (max-width: 768px) {
    padding: 10px;

    h2 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.2rem;
    }
  }
`;

const PartnersContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const PartnerCard = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.5s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 12px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

const PartnerLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7); /* Black overlay */
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;

  ${PartnerCard}:hover & {
    opacity: 1;
  }
`;

const PartnerName = styled.h3`
  font-size: 1rem;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
