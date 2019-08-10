import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyle from '@@universal/GlobalStyle';
import Leftbar from '@@universal/components/Leftbar';
import RootPage from '@@universal/components/pages/RootPage/RootPage';
import Textpage from '@@universal/components/pages/TextPage/TextPage';

const StyledUniversal = styled.div<any>({
  display: 'flex',
  fontFamily: '"Roboto", sans-serif',
});

const Page = styled.div({
  display: 'flex',
  justifyContent: 'center',
  padding: '38px 40px',
});

const Universal: React.FC<{}> = () => {
  return (
    <StyledUniversal>
      <GlobalStyle />
      <Leftbar />
      <Page>
        <Switch>
          <Route
            component={Textpage}
            path="/styled/Text"
          />
          <Route
            component={RootPage}
          />
        </Switch>
      </Page>
    </StyledUniversal>
  );
};

export default Universal;
