import EmButton from 'seoul/emotion/Button';
import React from 'react';
import ScButton, { ButtonProps } from 'seoul/styled/Button';

import { alert } from '@@universal/utils';
import { ComponentType } from '@@universal/constants';
import PageBase from '@@universal/components/pages/PageBase';
import Variation from '@@universal/components/pages/Variation';
import useComponentType from '@@universal/hooks/useComponentType';

const TextPage: React.FC<{}> = () => {
  const { Component } = useComponentType<ButtonProps>({
    [ComponentType.EMOTION]: EmButton,
    [ComponentType.STYLED]: ScButton,
  });

  const handleClickButton = React.useCallback(() => {
    alert('button is clicked');
  }, []);

  return (
    <PageBase pageTitle="Button">
      <Variation typeLabel="default">
        <Component onClick={handleClickButton}>
          button
        </Component>
      </Variation>
    </PageBase>
  );
};

export default TextPage;
