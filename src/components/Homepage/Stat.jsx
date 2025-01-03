import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import Rocket from '../../assets/Homepage/rocket.gif';
import Rockets from '../../assets/Homepage/rocketg.gif';

const stats = [
    { number: 67, description: "No. of Startups", icon: Rocket },
    { number: 12, description: "Startups Graduated", icon: Rockets },
    { number: 250, description: "Employment Generated", icon: "https://startupodisha.gov.in/wp-content/uploads/2021/07/Nodal-Agency.gif" },
    { number: 92, description: "Corps Fund", icon: "https://startupodisha.gov.in/wp-content/uploads/2021/07/Seed-Funding-1.gif" },
    { number: 92, description: "CSR Secured", icon: "https://startupodisha.gov.in/wp-content/uploads/2021/07/No-of-cells.gif" },
];

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
`;

const StatContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const StatImage = styled.img`
    width: 3rem;
    height: 3rem;
    margin-bottom: 0.5rem;
`;

const StatNumber = styled.span`
    font-size: 2.5rem;
    font-weight: bold;
    color: #3b82f6; /* Blue color */
`;

const StatDescription = styled.span`
    font-size: 1.125rem;
    color: #e11d48; /* Red color */
`;

const App = () => {
    return (
        <Wrapper>
            {stats.map((stat, index) => (
                <StatItem
                    key={index}
                    number={stat.number}
                    description={stat.description}
                    icon={stat.icon}
                />
            ))}
        </Wrapper>
    );
};

const StatItem = ({ number, description, icon }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Animation triggers only once
        threshold: 0.5, // Triggers when 50% of the element is visible
    });

    return (
        <StatContainer ref={ref}>
            <StatImage src={icon} alt={description} />
            <StatNumber>
                {inView ? <CountUp start={0} end={number} duration={2} /> : 0}
            </StatNumber>
            <StatDescription>{description}</StatDescription>
        </StatContainer>
    );
};

export default App;
