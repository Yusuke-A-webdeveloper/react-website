import { useEffect } from 'react';
import { titleChange } from '../helper';
import styled from 'styled-components';
import aboutImg from '../images/about-img.jpg';

const About = () => {
  useEffect(() => {
    titleChange('About');
  }, []);

  return (
    <Wrapper>
      <div className="img-con">
        <img src={aboutImg} alt="about" />
      </div>
      <article>
        <h2>about me</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          fugit odio suscipit facere quasi labore earum soluta veritatis
          delectus, quibusdam, voluptates, aut assumenda nihil deserunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          sapiente nulla dolores repellat illo nesciunt neque laudantium
          voluptas vel, soluta voluptates. Veritatis perspiciatis ad nesciunt?
        </p>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  .img-con {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    z-index: -1;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.3;
    }
  }
  article {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
      color: var(--menu-active);
      font-size: 80px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    p {
      color: #fff;
      max-width: 800px;
      margin-bottom: 20px;
    }
  }
  @media (max-width: 720px) {
    article h2 {
      font-size: 60px;
      color: var(--menu-active);
    }
    article p {
      padding: 0 20px;
    }
  }
`;

export default About;
