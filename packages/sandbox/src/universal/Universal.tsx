import 'core-js/fn/array/flat-map';

import { hot } from 'react-hot-loader/root';
import React from 'react';
import styled from 'styled-components';

import componentDefinitions from './componentDefinitions';
import Page from '@@universal/components/pages/Page';
import GlobalStyle from '@@universal/GlobalStyle';
import Leftbar from '@@universal/components/Leftbar';

const StyledUniversal = styled.div({
  display: 'flex',
  fontFamily: '"Roboto", sans-serif',
});

const Universal: React.FC<{}> = () => {
  return (
    <StyledUniversal>
      <GlobalStyle />
      <Leftbar componentDefinitions={componentDefinitions} />
      <Page componentDefinitions={componentDefinitions} />
    </StyledUniversal>
  );
};

export default hot(Universal);
