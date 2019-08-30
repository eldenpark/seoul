import 'core-js/fn/array/flat-map';

import { hot } from 'react-hot-loader/root';
import React from 'react';
import styled from 'styled-components';

import componentDefinitions from './componentDefinitions';
import {
  ComponentType,
  ComponentTypeContext,
} from '@@universal/context';
import Page from '@@universal/components/pages/Page';
import GlobalStyle from '@@universal/components/GlobalStyle';
import Leftbar from '@@universal/components/Leftbar';
import Top from '@@universal/components/Top';

const StyledUniversal = styled.div({
  display: 'flex',
  fontFamily: '"Roboto", sans-serif',
});

const Right = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
});

const Universal: React.FC<{}> = () => {
  const [componentType, setComponentType] = React.useState(ComponentType.LINARIA);
  const handleChangeComponentType = React.useCallback((e) => {
    setComponentType(e.target.value);
  }, [componentType]);

  return (
    <ComponentTypeContext.Provider value={componentType}>
      <StyledUniversal>
        <GlobalStyle />
        <Leftbar componentDefinitions={componentDefinitions} />
        <Right>
          <Top
            handleChangeComponentType={handleChangeComponentType}
          />
          <Page componentDefinitions={componentDefinitions} />
        </Right>
      </StyledUniversal>
    </ComponentTypeContext.Provider>
  );
};

export default hot(Universal);
