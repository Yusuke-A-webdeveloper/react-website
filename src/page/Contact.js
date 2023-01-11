import { useEffect } from 'react';
import { titleChange } from '../helper';
import styled from 'styled-components';
import contactImg from '../images/about-img.jpg';

const Contact = () => {
  useEffect(() => {
    titleChange('Contact');
  }, []);

  return (
    <Wrapper>
      <div className="img-con">
        <img src={contactImg} alt="" />
      </div>
      <form>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="email" />
        <textarea></textarea>
        <button type="submit" onClick={(e) => console.log(e.preventDefault())}>
          send
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 80px);
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
  form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 450px;
    background: rgba(56, 189, 248, 0.35);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    input,
    textarea {
      width: 80%;
      font-size: 18px;
      padding: 5px;
    }
    textarea {
      resize: none;
      height: 250px;
      font-size: 18px;
      padding: 5px;
    }
    button {
      display: inline-block;
      font-size: 18px;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 8px 15px;
      border: none;
      cursor: pointer;
      transition: 0.3s ease-out;
      :hover {
        color: #fff;
        background: var(--menu-active);
      }
    }
  }
  @media (max-width: 550px) {
    form {
      width: 100%;
    }
  }
  @media (max-width: 670px) and (max-height: 415px) {
    position: relative;
    width: 100%;
    min-height: calc(140vh - 0px);
  }
`;

export default Contact;
