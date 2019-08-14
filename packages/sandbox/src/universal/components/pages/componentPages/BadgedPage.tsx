import Badged from 'seoul/styled/Badged';
import React from 'react';

import PageBase from '@@universal/components/pages/PageBase';
import Variation from '@@universal/components/pages/Variation';

const BadgedPage: React.FC<{}> = () => {
  return (
    <PageBase pageTitle="Badged">
      <Variation typeLabel="default">
        <Badged label="3">
          <div>
            power
          </div>
        </Badged>
      </Variation>
    </PageBase>
  );
};

export default BadgedPage;
