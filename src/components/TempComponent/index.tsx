import React from 'react';
import * as S from './styles';
import perfil1 from '../../assets/perfilEdit5.png';

export const TempComponent = (): React.ReactElement => {
  return (
    <S.Container>
      <S.ContainerContent>
        <S.ContainerImg>
          <img src={perfil1} alt="Foto Perfil Wesley Silva" />
        </S.ContainerImg>
        <S.ContainerText>
          Página em construção, por gentileza acesse minha redes sociais para
          contato ou Github para portfolio.
        </S.ContainerText>
        <S.ContainerSocialMedias>
          <a href="https://www.linkedin.com/in/wesleyallan/">
            <i className="social-icon fab fa-linkedin fa-lg"></i>
          </a>
          <a href="https://github.com/wesleyallan">
            <i className="fab fa-github-alt fa-lg"></i>
          </a>
          <a href="https://twitter.com/Wesley_AllanS">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a href="https://instagram.com/wesleyallansilva/">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
        </S.ContainerSocialMedias>
      </S.ContainerContent>
    </S.Container>
  );
};
