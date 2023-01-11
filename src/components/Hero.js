import styled from 'styled-components';
import heroImg from '../images/hero-img.jpg';

const Hero = () => {
  return (
    <Wrapper>
      <div className="img-con">
        <img src={heroImg} alt="hero" />
      </div>
      <article>
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur,
          id.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          officia sint dolorem dolorum tempore dolores voluptate suscipit,
          voluptatum nam qui?
        </p>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
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
    padding: 0 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    h2 {
      color: var(--menu-active);
      text-transform: capitalize;
      font-size: 40px;
    }
    p {
      color: #fff;
      font-size: 20px;
    }
  }
  @media (max-width: 800px) {
    article {
      padding: 0 50px;
    }
    article h2 {
      font-size: 30px;
    }
  }
  @media (max-width: 415px) {
    article {
      padding: 0 20px;
    }
    article h2 {
      font-size: 22px;
    }
    article p {
      font-size: 18px;
    }
  }
  @media (max-width: 670px) and (max-height: 415px) {
    article h2 {
      font-size: 25px;
    }
  }
`;

export default Hero;
