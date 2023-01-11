import { useEffect } from 'react';
import Intro from '../components/Intro';
import Hero from '../components/Hero';
import styled from 'styled-components';
import { titleChange } from '../helper';

const Home = () => {
  useEffect(() => {
    titleChange('Home');
  }, []);

  return (
    <>
      <HeroWrapper>
        <Hero />
      </HeroWrapper>
      <IntroWrapper>
        <Intro />
      </IntroWrapper>
    </>
  );
};

const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
`;

const IntroWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

export default Home;
