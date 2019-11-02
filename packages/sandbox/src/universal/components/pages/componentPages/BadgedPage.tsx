import EmBadged from 'seoul/emotion/Badged';
import React from 'react';
import ScBadged, { BadgedProps } from 'seoul/styled/Badged';

import { ComponentType } from '@@universal/constants';
import PageBase from '@@universal/components/pages/PageBase';
import Variation from '@@universal/components/pages/Variation';
import useComponentType from '@@universal/hooks/useComponentType';

const BadgedPage = () => {
  const { Component } = useComponentType<BadgedProps>({
    [ComponentType.EMOTION]: EmBadged,
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
