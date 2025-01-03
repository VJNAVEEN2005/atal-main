import React, { useState } from 'react';
import styled from 'styled-components';
// Import the images
import { 
  Picture1, Picture2, Picture3, Picture4, Picture5, Picture6, 
  Picture7, Picture8, Picture9, Picture10, Picture11, Picture12, 
  Picture13, Picture14, Picture15, Picture16, Picture17, Picture18 
} from '../../assets/Services/services';

const SinglePage = () => {
  const [filter, setFilter] = useState('All');
  
  const handleFilter = (filterType) => {
    setFilter(filterType);
  };

  const filterOptions = ['All', 'Portotype', 'Software','Student innvation'];

  const services = [
    {
      title: 'PICK AND PLACE MACHINE',
      logo: Picture1, 
      details: `Model Name: SMTMATE 660 No of Feeder: 64 Element for mounting: 0201, 0402, 0603, 0805, 1206,SOT, SOD, SOP, SSOP, QFN, VCQFN, BGA. Max chip size: 40*40mm`,
      type: 'Portotype',
    },
    {
      title: '3D SCANNER',
      logo: Picture2,
      details: `Model name: EinScan Pro HD Scan Accuracy: upto 0.045mm Output Formats: OBJ, STL, ASC, PLY, P3, 3MF Supported OS: win10,(64bit)`,
      type: 'Portotype',
    },
    {
      title: '3D PRINTER',
      logo: Picture3,
      details: `Model Name: Raise3D E2 3D Printer Material Type: PLA Print Head Travel Speed: 15–150 mm/s Machine Code Type: GCODE`,
      type: 'Portotype',
    },
    {
      title: 'RESIN 3D PRINTER',
      logo: Picture4,
      details: `Model name: Phrozen Sonic Mega 8K 3D Printer size: 475x400x680mm Print volume: 330x185x400mm Max printing speed: 70mm/hr`,
      type: 'Portotype',
    },
    {
      title: 'WEGSTR PCB PROTOTYPING MACHINE',
      logo: Picture5,
      details: `Model Name: Wegstr CNC Milling workspace: (140*200*40) (X*Y*Z) mm Working Material: Wood, Aluminium, PCB, copper, Gold, Silver.`,
      type: 'Portotype',
    },
    {
      title: 'LASER CUTTING MACHINE',
      logo: Picture6,
      details: `Model Name: Flux Beam Box Pro Operating Power: 50w Max Cutting Depth: 12mm Versatile: Cutting and Engraving`,
      type: 'Portotype',
    },
    {
      title: 'SKYRC 1080 CHARGER FOR LIPO',
      logo: Picture7,
      details: `Model Name: Tattu 22000mAh (6S) Dimension: 206mm Length x 91mm Width x 61mm Height Material: Lithium Polymer`,
      type: 'Portotype',
    },
    {
      title: 'CELL IMPEDANCE TESTER',
      logo: Picture8,
      details: `Model Name: BT3563A Max voltage measurement: 300v Response time: 10ms Resistance measurement ranges: 3 mΩ/30 mΩ/300 mΩ/3 Ω/ 30 Ω/300 Ω/3 kΩ`,
      type: 'Portotype',
    },
    {
      title: 'INVERTER WELDING MACHINE',
      logo: Picture9,
      details: `MODEL NO: TIG 200 INPUT POWER SUPPLY: I phase, 230v AC RATED CURRENT: 17A EFFICIENCY: 85%`,
      type: 'Portotype',
    },
    {
      title: 'SPOT WELDING MACHINE',
      logo: Picture10,
      details: `Model No: SUNKKO 737G Operating Voltage: 220v Portable Pedal Switch Operated`,
      type: 'Portotype',
    },
    {
      title: 'AGRICULTURE DRONE',
      logo: Picture11,
      details: `Model Name: Agri Drone (10L) Dimension: 1495*1308*500mm Material: Carbon Fiber`,
      type: 'Portotype',
    },
    {
      title: 'GIMBAL',
      logo: Picture12,
      details: `Model name: Tarot FLIR Metal 3 Axis gimbal Milling workspace: (140*200*40) (X*Y*Z) mm Working Material: FLIR thermal imaging cameras Flir VUE 336, VUE640`,
      type: 'Portotype',
    },
    {
      title: 'LIDAR 360 SOFTWARE',
      logo: Picture13,
      details: `Software Name: LiDAR360 Installation: 2 systems`,
      type: 'Software',
    },
    {
      title: 'E survey software',
      logo: Picture14,
      details: `Version Name: E survey software Installation: 2 systems Usage: Earthwork volume calculations`,
      type: 'Software',
    },
    {
      title: 'Agisoft Software',
      logo: Picture15,
      details: `Version Name: Agisoft Cloud Installation: 2 systems Usage: site inspection, annotation and documentation integrated with cloud processing service`,
      type: 'Software',
    },
    {
      title: 'KEIL SOFTWARE',
      logo: Picture16,
      details: `Model Name: ARM DEVELOPMENT TOOL Toolchain: RealView MDK-ARM Version: 4.12 Nature of License: Perpetual No of users: 1`,
      type: 'Software',
    },
    {
      title: 'PROTEUS VSM SOFTWARE',
      logo: Picture17,
      details: `Version Name: PROTEUS PLATINUM EDITION No of users: 1 platinum edition + 10(lab license) Nature of License: perpetual`,
      type: 'Software',
    },
    {
      title: 'ALTAIR',
      logo: Picture18,
      details: `Model Name: ALTAIR MULTIPHYSICS/ MECHATRONICS ENGINEER SUITE No of users: 1(full package) + 30(lab license) Nature of License: Perpetual`,
      type: 'Software',
    },
  ];

  const filteredServices = filter === 'All' ? services : services.filter(service => service.type === filter);

  return (
    <Container>
      <Heading>AIC-PECF Service & Supports</Heading>
      <FilterContainer>
        {filterOptions.map((option) => (
          <FilterButton
            key={option}
            active={filter === option}
            onClick={() => handleFilter(option)}
          >
            {option}
          </FilterButton>
        ))}
      </FilterContainer>
      <CardsContainer>
        {filteredServices.map((service) => (
          <Card key={service.title}>
            <CardImage src={service.logo} alt={service.title} />
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.details}</CardDescription>
          </Card>
        ))}
      </CardsContainer>
    </Container>
  );
};

export default SinglePage;

// Styled Components

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
`;

const Heading = styled.h1`
  font-size: 32px;
  margin-bottom: 30px;
`;

const FilterContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const FilterButton = styled.button`
  padding: 10px 20px;
  background-color: ${props => (props.active ? '#12283c' : '#ccc')};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #555;
`;

