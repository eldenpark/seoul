import 'core-js/fn/array/flat-map';

import { hot } from 'react-hot-loader/root';
import React from 'react';
import sc from 'styled-components';

import componentDefinitions from './componentDefinitions';
import Page from '@@universal/components/pages/Page';
import GlobalStyle from '@@universal/components/GlobalStyle';
import Leftbar from '@@universal/components/Leftbar';

const StyledUniversal = sc.div({
  display: 'flex',
  fontFamily: '"Roboto", sans-serif',
});

const Right = sc.div({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
});

const Universal: React.FC<{}> = () => {
  return (
    <StyledUniversal>
      <GlobalStyle />
      <Leftbar componentDefinitions={componentDefinitions} />
      <Right>
        <Page componentDefinitions={componentDefinitions} />
      </Right>
    </StyledUniversal>
  );
};

export default hot(Universal);
