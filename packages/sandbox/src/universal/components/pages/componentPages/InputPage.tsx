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
  return (
    <PageBase pageTitle="Input">
      <Variation typeLabel="default">
        <Row>
          <Input
            id="input-default"
            label="input1"
          />
          <Input
            id="input-default2"
            label="input2"
          />
        </Row>
      </Variation>
    </PageBase>
  );
};

export default InputPage;
