import React from 'react';
import styled from 'styled-components';
import nitLogo from '../../assets/Partnerspage/Academic/NIT.png';
import ifetlogo from '../../assets/Partnerspage/Academic/IFET.png';
import pip from '../../assets/Partnerspage/Academic/Pip.png';
import river from '../../assets/Partnerspage/Academic/River.png';
import rj from '../../assets/Partnerspage/Academic/RJ.png';
import smvec from '../../assets/Partnerspage/Academic/SMVEC.png';

const academicPartners = [
  { name: 'NIT Karaikal', logo: nitLogo },
  { name: 'IFET College of Engineering', logo: ifetlogo },
  { name: 'PAJANCOA & RI Karaikal ', logo: pip},
  { name: 'Rajiv Gandhi Institute of Veterinary Education and Research (River) ', logo: river },
  { name: 'Dr. B. R. Ambedkar Polytechnic CollegeYanam ', logo: rj},
  { name: 'Sri Manakula Vinayagar Engineering College ', logo: smvec}
  ];

 const Academic = () => {
  return (
    <AcademicContainer>
      <h2>Our Academic Partners</h2>
      <LogosContainer>
        {academicPartners.map((partner, index) => (
          <LogoCard key={index}>
            <PartnerLogo src={partner.logo} alt={`${partner.name} logo`} />
            <LogoInfo>
              <h3>{partner.name}</h3>
            </LogoInfo>
          </LogoCard>
        ))}
      </LogosContainer>
    </AcademicContainer>
  );
};
export default Academic;

const AcademicContainer = styled.div`
  text-align: center;
  padding: 20px;

  h2 {
    font-size: 1.8rem;
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

const LogosContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const LogoCard = styled.div`
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
    box-shadow:  12px 16px rgba(0, 0, 0, 0.2);
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

const LogoInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s;

  ${LogoCard}:hover & {
    opacity: 1;
  }

  h3 {
    font-size: 1.2rem;

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;
