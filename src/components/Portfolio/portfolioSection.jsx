import React, { useState } from 'react';
import styled from 'styled-components';
import { portfolioData } from './data/portfolioData'; 
import PortfolioFilters from './portfolioFilters';
import PortfolioCard from './portfolioCard';
import Modal from './UI/Modal';
import StartupDetails from './StartupDetail';

const categories = ['All', 'Ongoing', 'Graduated', 'SISFS'];

const Section = styled.section`
  padding: 4rem 1rem;
  background-color: #f9fafb;
`;

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: #4b5563;
  max-width: 42rem;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedStartup, setSelectedStartup] = useState(null);

  const filteredData = activeCategory === 'All'
    ? portfolioData
    : portfolioData.filter(item => item.category === activeCategory);

  const handleStartupClick = (startup) => {
    setSelectedStartup(startup);
  };

  return (
    <Section>
      <Container>
        <Header>
          <Title>Our Portfolio</Title>
          <Subtitle>
            Discover our diverse portfolio of innovative startups and success stories
          </Subtitle>
        </Header>
        
        <PortfolioFilters
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <Grid>
          {filteredData.map(item => (
            <PortfolioCard 
              key={item.id} 
              {...item} 
              onClick={() => handleStartupClick(item)}
            />
          ))}
        </Grid>
      </Container>

      <Modal 
        isOpen={!!selectedStartup}
        onClose={() => setSelectedStartup(null)}
      >
        {selectedStartup && <StartupDetails startup={selectedStartup} />}
      </Modal>
    </Section>
  );
};

export default PortfolioSection;
