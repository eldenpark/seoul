import 'seoul/linaria/Grid.css';

import GridContainer from 'seoul/styled/GridContainer';
import LnGrid, { GridProps } from 'seoul/linaria/Grid';
import React from 'react';
import ScGrid from 'seoul/styled/Grid';

import { ComponentType } from '@@universal/constants';
import PageBase from '@@universal/components/pages/PageBase';
import Variation from '@@universal/components/pages/Variation';
import useComponentType from '@@universal/hooks/useComponentType';

const GridPage: React.FC<{}> = () => {
  const { Component } = useComponentType<GridProps>({
    [ComponentType.LINARIA]: LnGrid,
    [ComponentType.STYLED]: ScGrid,
  });

  return (
    <PageBase pageTitle="Grid">
      <Variation typeLabel="default">
        <GridContainer>
          <Component unit={3}>
            grid1
          </Component>
          <Component unit={3}>
            grid2
          </Component>
          <Component unit={3}>
            grid3
          </Component>
        </GridContainer>
      </Variation>
    </PageBase>
  );
};

export default GridPage;
