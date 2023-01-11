import styled from 'styled-components';
import { jobList } from '../data';

const Intro = () => {
  return (
    <Wrapper>
      <div className="title">
        <h2>Timeline</h2>
      </div>
      <article>
        {jobList.map((list) => {
          const { id, icon, title, years, desc } = list;
          return (
            <div className="single-timeline" key={id}>
              <div className="left">
                <div className="icon">{icon}</div>
                <h3>{title}</h3>
                <h4>{years}</h4>
              </div>
              <div className="right">
                <p>{desc}</p>
              </div>
            </div>
          );
        })}
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  position: relative;
  width: 100%;
  .title {
    text-align: center;
    h2 {
      font-size: 60px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--menu-active);
      margin-top: 50px;
    }
  }
  .single-timeline {
    position: relative;
    margin: 50px auto;
    max-width: 800px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    box-shadow: 40px 30px 40px rgba(0, 0, 0, 0.25);
    height: 250px;
    padding: 30px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;
    .icon {
      text-align: center;
      font-size: 25px;
      color: var(--menu-active);
    }
    h3 {
      color: var(--menu);
      font-size: 22px;
      text-transform: capitalize;
    }
    h4 {
      text-align: center;
      color: var(--menu);
      text-transform: capitalize;
      font-size: 15px;
    }
    p {
      color: rgba(0, 0, 0, 0.75);
    }
  }
  @media (max-width: 600px) {
    .title h2 {
      font-size: 45px;
    }
    .single-timeline {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 415px) {
    .single-timeline p {
      margin-top: 20px;
    }
  }
  @media (max-width: 670px) and (max-height: 415px) {
    .single-timeline h3 {
      font-size: 16px;
    }
  }
`;

export default Intro;
