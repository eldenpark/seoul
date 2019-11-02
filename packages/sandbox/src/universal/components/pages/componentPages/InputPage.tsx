import EmInput from 'seoul/emotion/Input';
import React from 'react';
import ScInput, { InputProps } from 'seoul/styled/Input';
import styled from 'styled-components';

import { ComponentType } from '@@universal/constants';
import PageBase from '@@universal/components/pages/PageBase';
import Variation from '@@universal/components/pages/Variation';
import useComponentType from '@@universal/hooks/useComponentType';

const Row = styled.div({
  '>div': {
    marginRight: 15,
  },
});

const InputPage: React.FC<{}> = () => {
  const { Component } = useComponentType<InputProps>({
    [ComponentType.EMOTION]: EmInput,
    [ComponentType.STYLED]: ScInput,
  });

  const [msg, setMsg] = React.useState('');
  const handleFocusEmail = React.useCallback(() => {
    setMsg('focus email');
  }, []);

  const handleBlurEmail = React.useCallback(() => {
    setMsg('');
  }, []);

  return (
    <PageBase pageTitle="Input">
      <Variation typeLabel="default">
        <Row>
          <div>
            <span>msg: </span>
            <span>{msg}</span>
          </div>
          <Component
            id="input-default"
            label="email"
            onBlur={handleBlurEmail}
            onFocus={handleFocusEmail}
          />
          <Component
            label="password"
            type="password"
          />
        </Row>
      </Variation>
      <Variation typeLabel="fullWidth">
        <div>
          <Component
            fullWidth
            label="full1"
          />
          <Component
            fullWidth
            label="full2"
            type="password"
          />
        </div>
      </Variation>
      <Variation typeLabel="placeholder">
        <div>
          <Component
            fullWidth
            label="full1"
            placeholder="placeholder 1"
          />
          <Component
            fullWidth
            label="full2"
            placeholder="placeholder 2"
            type="password"
          />
        </div>
      </Variation>
    </PageBase>
  );
};

export default InputPage;
