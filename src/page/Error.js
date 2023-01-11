import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { titleChange } from '../helper';
import styled from 'styled-components';
import errorImg from '../images/not_found.svg';

const Error = () => {
  useEffect(() => {
    titleChange('Error');
  }, []);

  return (
    <Wrapper>
      <div className="img-con">
        <img src={errorImg} alt="not found" />
      </div>
      <article>
        <h2>404 not found</h2>
        <p>page doesn't exist.</p>
        <div className="btn-container">
          <Link to="/">back home</Link>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .img-con {
    position: relative;
    width: 350px;
    height: 300px;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  article {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    h2 {
      color: var(--menu);
      font-size: 35px;
      letter-spacing: 1px;
      text-transform: capitalize;
    }
    p {
      font-size: 20px;
      text-transform: capitalize;
      text-align: center;
    }
    .btn-container {
      text-align: center;
      a {
        display: inline-block;
        font-size: 20px;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 8px 15px;
        color: #fff;
        background: var(--menu);
        border: none;
        border-radius: 20px;
        transition: 0.3s ease-out;
        :hover {
          background: var(--menu-active);
        }
      }
    }
  }
  @media (max-width: 670px) and (max-height: 415px) {
    height: calc(110vh - 0px);
  }
`;

export default Error;
