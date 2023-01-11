import { useEffect } from 'react';
import { titleChange } from '../helper';
import styled from 'styled-components';
import { projectList } from '../data';

const Projects = () => {
  useEffect(() => {
    titleChange('Projects');
  }, []);

  return (
    <Wrapper>
      <div className="title">
        <h2>check my projects</h2>
      </div>
      <article>
        {projectList.map((list) => {
          const { id, lang, duration, img, text, title } = list;
          return (
            <div className="single-project" key={id}>
              <div className="img-con">
                <img src={img} alt={title} />
              </div>
              <main>
                <h2>{title}</h2>
                <h3>{lang}</h3>
                <h4>Duration : {duration}</h4>
                <p>{text}</p>
              </main>
            </div>
          );
        })}
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  .title {
    text-align: center;
    margin-top: 50px;
    h2 {
      font-size: 40px;
      color: var(--menu-active);
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }
  article {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 80px;
    margin: 50px 0;
    .single-project {
      position: relative;
      width: 500px;
      height: 550px;
      border: 1px solid rgba(0, 0, 0, 0.05);
      border-radius: 20px;
      box-shadow: 30px 30px 40px rgba(0, 0, 0, 0.25);
      padding: 30px;
      .img-con {
        position: relative;

        width: 100%;
        height: 50%;
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      main {
        margin-top: 20px;
        h2 {
          color: var(--menu-active);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 30px;
        }
        h3 {
          color: var(--menu);
          text-transform: capitalize;
        }
        h4 {
          color: var(--menu);
          font-size: 15px;
        }
        p {
          margin-top: 20px;
          text-align: justify;
          color: rgba(0, 0, 0, 0.75);
        }
      }
    }
  }
  @media (max-width: 415px) {
    .title h2 {
      font-size: 28px;
    }
  }
`;

export default Projects;
