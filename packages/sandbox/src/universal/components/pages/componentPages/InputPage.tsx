import Input from 'seoul/styled/Input';
import React from 'react';
import styled from 'styled-components';

import PageBase from '@@universal/components/pages/PageBase';
import Variation from '@@universal/components/pages/Variation';

const Row = styled.div({
  '>div': {
    marginRight: 15,
  },
});

const InputPage: React.FC<{}> = () => {
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
          <Input
            id="input-default"
            label="email"
            onBlur={handleBlurEmail}
            onFocus={handleFocusEmail}
          />
          <Input
            label="password"
            type="password"
          />
        </Row>
      </Variation>
      <Variation typeLabel="fullWidth">
        <div>
          <Input
            fullWidth
            label="full1"
          />
          <Input
            fullWidth
            label="full2"
            type="password"
          />
        </div>
      </Variation>
    </PageBase>
  );
};

export default InputPage;
