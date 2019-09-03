import 'seoul/linaria/Spinner.css';

import LnSpinner, { SpinnerProps } from 'seoul/linaria/Spinner';
import React from 'react';
import ScSpinner from 'seoul/styled/Spinner';

import { ComponentType } from '@@universal/constants';
import PageBase from '@@universal/components/pages/PageBase';
import Variation from '@@universal/components/pages/Variation';
import useComponentType from '@@universal/hooks/useComponentType';

const SpinnerPage: React.FC<{}> = () => {
  const { Component } = useComponentType<SpinnerProps>({
    [ComponentType.LINARIA]: LnSpinner,
    [ComponentType.STYLED]: ScSpinner,
  });

  return (
    <PageBase pageTitle="Spinner">
      <Variation typeLabel="default">
        <Component />
      </Variation>
    </PageBase>
  );
};

export default SpinnerPage;
