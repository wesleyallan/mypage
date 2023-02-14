import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background: ${(props) => props.theme.background};
`;

export const ContainerContent = styled.div`
  width: 356px;
  height: 356px;
  padding: 25px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${(props) => props.theme.foreground};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04),
    0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26),
    0px 8px 17px rgba(0, 0, 0, 0.29), inset 0px 6px 8px rgba(255, 255, 255, 0.1),
    inset 0px -4px 5px rgba(0, 0, 0, 0.22);
`;

export const ContainerImg = styled.header`
  display: grid;
  place-items: center;
  & img {
    width: 100px;
    border-radius: 50%;
    box-shadow: 0px 22px 14px rgba(0, 0, 0, 0.02),
      0px 14px 14px rgba(0, 0, 0, 0.08), 0px 8px 12px rgba(0, 0, 0, 0.2),
      0px 4px 8px rgba(0, 0, 0, 0.35), 0px 0px 2px rgba(0, 0, 0, 0.35),
      inset 0px 2px 3px rgba(255, 255, 255, 0.06);
  }
`;

export const ContainerText = styled.main`
  color: ${(props) => props.theme.textPrimary};
  text-align: center;
`;

export const ContainerSocialMedias = styled.footer`
  display: flex;
  justify-content: space-around;
  & i {
    color: ${(props) => props.theme.textPrimary};
    transition: all 0.2s ease;
    &.fa-linkedin:hover {
      color: #1877f2;
    }
    &.fa-github-alt:hover {
      color: #aaa;
    }
    &.fa-twitter:hover {
      color: #1da1f2;
    }
    &.fa-instagram:hover {
      color: #e4405f;
    }
  }
`;
