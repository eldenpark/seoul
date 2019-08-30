import 'seoul/linaria/Badged.css';

import { ComponentType } from '@@universal/context';
import LnBadged, { BadgedProps } from 'seoul/linaria/Badged';
import ScBadged from 'seoul/styled/Badged';
import React from 'react';
import PageBase from '@@universal/components/pages/PageBase';
import Variation from '@@universal/components/pages/Variation';
import useComponentType from '@@universal/hooks/useComponentType';

const BadgedPage = () => {
  const Component = useComponentType<BadgedProps>({
    [ComponentType.LINARIA]: LnBadged,
    [ComponentType.STYLED]: ScBadged,
  });

  return (
    <PageBase pageTitle="Badged">
      <Variation typeLabel="default">
        <Component label="3">
          <div>
            power
          </div>
        </Component>
      </Variation>
    </PageBase>
  );
};

export default BadgedPage;
