import EmGrid from 'seoul/emotion/Grid';
import EmGridContainer from 'seoul/emotion/GridContainer';
import React from 'react';
import ScGrid, { GridProps } from 'seoul/styled/Grid';
import ScGridContainer from 'seoul/styled/GridContainer';

import { ComponentType } from '@@universal/constants';
import PageBase from '@@universal/components/pages/PageBase';
import Variation from '@@universal/components/pages/Variation';
import useComponentType from '@@universal/hooks/useComponentType';

const GridPage: React.FC<{}> = () => {
  const { Component: Container } = useComponentType<any>({
    [ComponentType.EMOTION]: EmGridContainer,
    [ComponentType.STYLED]: ScGridContainer,
  });

  const { Component } = useComponentType<GridProps>({
    [ComponentType.EMOTION]: EmGrid,
    [ComponentType.STYLED]: ScGrid,
  });

  return (
    <PageBase pageTitle="Grid">
      <Variation typeLabel="default">
        <Container>
          <Component unit={3}>
            grid1
          </Component>
          <Component unit={3}>
            grid2
          </Component>
          <Component unit={3}>
            grid3
          </Component>
        </Container>
      </Variation>
    </PageBase>
  );
};

export default GridPage;
