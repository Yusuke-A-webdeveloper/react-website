import styled from 'styled-components';
import SocialIcon from './SocialIcon';

const Footer = () => {
  return (
    <Wrapper>
      <SocialIcon />
      <p>
        Copy right {new Date().getFullYear()} JPENwebdeveloper. All Right
        Reserved
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  position: relative;
  width: 100%;
  padding: 15px;
  font-size: 14px;
  p {
    text-align: center;
  }
  @media (max-width: 415px) {
    .title {
      font-size: 18px;
    }
  }
`;

export default Footer;
