import 'seoul/linaria/Badged.css';

import LnBadged from 'seoul/linaria/Badged';
// import ScBadged from 'seoul/styled/Badged';
import React from 'react';

import PageBase from '@@universal/components/pages/PageBase';
import Variation from '@@universal/components/pages/Variation';

const BadgedPage: React.FC<{}> = () => {
  return (
    <PageBase pageTitle="Badged">
      <Variation typeLabel="default">
        <LnBadged label="3">
          <div>
            power
          </div>
        </LnBadged>
      </Variation>
    </PageBase>
  );
};

export default BadgedPage;
