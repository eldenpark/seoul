import React from 'react';
import Text from 'seoul/styled/Text';

import PageBase from '@@universal/components/pages/PageBase';
import Variation from '@@universal/components/pages/Variation';

const text = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

const TextPage: React.FC<{}> = () => {
  return (
    <PageBase pageTitle="Badged">
      <Variation typeLabel="default">
        <Text>{text}</Text>
      </Variation>
      <Variation typeLabel="textType: h3">
        <Text textType="h3">{text}</Text>
      </Variation>
      <Variation typeLabel="textType: t3">
        <Text textType="t3">{text}</Text>
      </Variation>
      <Variation typeLabel="textType: t4 p">
        <Text
          p
          textType="t4"
        >
          {text}
        </Text>
      </Variation>
    </PageBase>
  );
};

export default TextPage;
