import Button from 'seoul/styled/Button';
import React from 'react';

import { alert } from '@@universal/utils';
import PageBase from '@@universal/components/pages/PageBase';
import Variation from '@@universal/components/pages/Variation';

const TextPage: React.FC<{}> = () => {
  const handleClickButton = React.useCallback(() => {
    alert('button is clicked');
  }, []);

  return (
    <PageBase pageTitle="Button">
      <Variation typeLabel="default">
        <Button onClick={handleClickButton}>
          button
        </Button>
      </Variation>
    </PageBase>
  );
};

export default TextPage;
