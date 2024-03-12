// src/components/Home.js
import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const Title = styled.h1`
  color: #333;
`;

const Description = styled.p`
  color: #666;
  font-size: 18px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>Water Sanitation at Home</Title>
      <Description>
        Ensure clean and safe water for your family with our home water sanitation solutions.
      </Description>
      {/* Add more content or components as needed */}
    </HomeContainer>
  );
};

export default Home;
