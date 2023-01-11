import styled from 'styled-components';
import { socialList } from '../data';

const SocialIcon = () => {
  return (
    <Wrapper>
      <div className="title">
        <h2>follow my social media</h2>
      </div>
      <ul>
        {socialList.map((list) => {
          const { id, icon, href } = list;
          return (
            <li key={id}>
              <a href={href}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  .title {
    font-size: 25px;
    text-transform: capitalize;
    color: var(--menu);
  }
  ul {
    width: 100%;
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    li {
      list-style: none;
      a {
        font-size: 25px;
        color: var(--menu);
        transition: 0.3s ease-out;
        :hover {
          color: var(--menu-active);
        }
      }
    }
  }
`;

export default SocialIcon;
