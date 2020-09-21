import React from 'react';

import Feed from '../Feed';
import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Italo Leandro</h1>
        <h2>@ItaloLeandroS</h2>

        <p>
          Developer at <a href="http://www.adsoft.com.br/">@Adsoft</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Teixeira de Freitas, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 2 de novembro de 1997
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong>157</strong>
          </span>
          <span>
            <strong>26 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
