import React from 'react';
import Text from 'seoul/styled/Text';

import PageBase from '@@universal/components/pages/PageBase';
import Variation from '@@universal/components/pages/Variation';

const heading = 'Heading';
const text = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

const TextPage: React.FC<{}> = () => {
  return (
    <PageBase pageTitle="Text">
      <Variation typeLabel="default (t8)">
        <Text>{text}</Text>
      </Variation>
      <Variation typeLabel="textType: h4">
        <Text textType="h4">{heading}</Text>
      </Variation>
      <Variation typeLabel="textType: h5">
        <Text textType="h5">{heading}</Text>
      </Variation>
      <Variation typeLabel="textType: h6">
        <Text textType="h6">{heading}</Text>
      </Variation>
      <Variation typeLabel="textType: h7">
        <Text textType="h7">{heading}</Text>
      </Variation>
      <Variation typeLabel="textType: h8">
        <Text textType="h8">{heading}</Text>
      </Variation>
      <Variation typeLabel="textType: t6">
        <Text textType="t6">{text}</Text>
      </Variation>
      <Variation typeLabel="textType: t7">
        <Text textType="t7">{text}</Text>
      </Variation>
      <Variation typeLabel="textType: t8">
        <Text textType="t8">{text}</Text>
      </Variation>
      <Variation typeLabel="textType: t9">
        <Text textType="t9">{text}</Text>
      </Variation>
    </PageBase>
  );
};

export default TextPage;
