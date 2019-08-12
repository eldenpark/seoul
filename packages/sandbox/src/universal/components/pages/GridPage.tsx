import Grid from 'seoul/styled/Grid';
import GridContainer from 'seoul/styled/GridContainer';
import React from 'react';

import PageBase from '@@universal/components/pages/PageBase';
import Variation from '@@universal/components/pages/Variation';

const GridPage: React.FC<{}> = () => {
  return (
    <PageBase pageTitle="Grid">
      <Variation typeLabel="default">
        <GridContainer>
          <Grid unit={3}>
            grid1
          </Grid>
          <Grid unit={3}>
            grid2
          </Grid>
          <Grid unit={3}>
            grid3
          </Grid>
        </GridContainer>
      </Variation>
    </PageBase>
  );
};

export default GridPage;
