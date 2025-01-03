import React from 'react';
import styled from 'styled-components';
import { ExternalLink } from 'lucide-react';

const Card = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 12rem;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CategoryBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 1rem;
  background-color: #2563eb;
  color: white;
  font-size: 0.875rem;
  border-radius: 9999px;
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: #4b5563;
  margin-bottom: 1rem;
`;

const LearnMore = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #2563eb;
  transition: color 0.2s ease;

  &:hover {
    color: #1d4ed8;
  }
`;

const PortfolioCard = ({
  title,
  description,
  image,
  category,
  onClick,
}) => {
  return (
    <Card onClick={onClick}>
      <ImageContainer>
        <Image src={image} alt={title} />
        <CategoryBadge>{category}</CategoryBadge>
      </ImageContainer>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
       
      </Content>
    </Card>
  );
};

export default PortfolioCard;