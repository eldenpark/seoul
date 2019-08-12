import React from 'react';
import Spinner from 'seoul/styled/Spinner';

import PageBase from '@@universal/components/pages/PageBase';
import Variation from '@@universal/components/pages/Variation';

const SpinnerPage: React.FC<{}> = () => {
  return (
    <PageBase pageTitle="Spinner">
      <Variation typeLabel="default">
        <Spinner />
      </Variation>
    </PageBase>
  );
};

export default SpinnerPage;
