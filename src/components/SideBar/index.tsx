import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion key={1} name="Luiz Batanero" nickname="@luizbatanero" />,
              <FollowSuggestion key={2} name="Luck Morales" nickname="@lukemorales" />,
              <FollowSuggestion key={3} name="Camila Magalhães" nickname="@camilaamgl" />,
            ]}
          />
          <List title="Talvez você curta" elements={[<News key={1} />, <News key={2} />, <News key={3} />]} />

          <List title="Talvez você curta" elements={[<News key={1} />, <News key={2} />, <News key={3} />]} />

          <List title="Talvez você curta" elements={[<News key={1} />, <News key={2} />, <News key={3} />]} />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
